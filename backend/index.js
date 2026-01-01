const express = require('express');
const server = express();
const PORT = 5000;
const mongoose= require('mongoose');
const Movie = require('./models/movies.model');
const User = require('./models/user.model');
const cors = require('cors');

server.use(express.json());
server.use(express.urlencoded({extended: true}));


const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
};

server.use(cors(corsOptions));


mongoose.connect('mongodb://localhost:27017/reactjs09').then(()=>{
    console.log('Connected to MongoDB');
}).catch( err=>{
    console.log('Failed to connect to MongoDB',err);
});

server.post("/movies", async (req, res) => {
    try{
        const {img, name, genre, rating} = req.body;
        const newMovie = new Movie({img, name, genre, rating});
        await newMovie.save();
        res.status(201).json(newMovie);
    }catch(error){
        res.status(500).json({error: 'Failed to create a new movie'});
    }             
    });

server.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch movies'});
    }
});


server.get('/cartmovies', async (req, res) => {
    try {
        const movies = await Movie.find({isCart: true});
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch movies'});
    }
});

server.get('/favouritemovies', async (req, res) => {
    try {
        const movies = await Movie.find({isFavourite: true});
        res.json(movies);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch movies'});
    }
});

server.put('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {img, name, genre, rating, isCart, isFavourite} = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(id, {img, name, genre, rating, isCart, isFavourite}, {new: true});
        if(!updatedMovie){
            return res.status(404).json({error: 'Movie not found'});
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({error: 'Failed to update the movie'});
    }
});

server.delete('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
            return res.status(404).json({error: 'Movie not found'});
        }
        res.status(200).json({message: 'Movie deleted successfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed to delete the movie'});
    }
});

server.post("/signup", async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const newUser = new User({username, email, password});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error: 'Failed to create a new user'});
    }             
    });

server.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email, password});
        if(!user){
            return res.status(401).json({error: 'Invalid email or password'});
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error: 'Failed to login'});
    }             
    });


server.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

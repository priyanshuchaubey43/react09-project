const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    img: {type: String, required: true},
    name: {type: String, requiured: true},
    genre: {type: String, required: false},
    rating: {type: String, required: true},
    isCart: {type: Boolean, default: false},
    isFavourite: {type: Boolean, default: false}
}, {timestamps: true});


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
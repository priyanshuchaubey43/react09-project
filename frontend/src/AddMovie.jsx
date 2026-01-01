import React, { useState }from 'react'
import Navbar from './Navbar'
import "./AddMovie.css";


const AddMovie = () => {
    const [formdata, setFormdata] = useState({
        img: "",
        name: "",
        genre: "",
        rating: "",
      });
    const adddmovie= async(e)=>{  
        e.preventDefault();

        const response = await fetch("http://localhost:5000/movies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              role: localStorage.getItem("role"),
            },
            body: JSON.stringify(formdata),
          });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
              alert("Movie added successfully");
              setFormdata({
                img: "",
                name: "",
                genre: "",
                rating: "",
              });
            } else {
              alert("Failed to add movie");
            }
   } 


    console.log(formdata);
  return (
    <>
     <Navbar/>
    <div className="add-movie-container">
        <div className="add-movie-box">
      <h1>Add Movie</h1>
      <form>
        <input type="text" placeholder="Image URL" className="add-movie-input" onChange= {(e)=>setFormdata({...formdata,img:e.target.value})}
        value={formdata.img}/>
        <input type="text" placeholder="Movie Name" className="add-movie-input" onChange= {(e)=>setFormdata({...formdata,name:e.target.value})}
        value={formdata.name}/>
        <input type="text" placeholder="Genre" className="add-movie-input" onChange= {(e)=>setFormdata({...formdata,genre:e.target.value})}
        value={formdata.genre}/>
        <input type="text" placeholder="Rating" className="add-movie-input" onChange= {(e)=>setFormdata({...formdata,rating:e.target.value})}
        value={formdata.rating}/>
       <button onClick={adddmovie} type="submit" className="add-movie-btn"> Add Movie </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default AddMovie;

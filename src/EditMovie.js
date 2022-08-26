import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "./global";
import React, {  useEffect } from 'react';
export function EditMovie()
{
    const {_id } = useParams();
    //const movie=movieList[id];
    //console.log(movie);
    const [movie,setMovielist] = useState(null);

    useEffect(() => {fetch(`${API}/movies/${_id}`,
    {method: "GET",}) 
    .then((data) => data.json()) 
    .then((mvs) => setMovielist(mvs));
  }, []);



 
  return (<div>{movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}</div>);

}
function  EditMovieForm({movie})
{
  const[name,setName]=useState(movie.name);
  const[poster,setPoster]=useState(movie.poster);
  const[rating,setRating]=useState(movie.rating);
  const[summary,setSummary]=useState(movie.summary);
  const[trailer,setTrailer]=useState(movie.trailer);
  const history= useHistory()
  return(
    <div className="list">
    <TextField value={poster} label="Poster Link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField value={name}  label="Movie name" variant="outlined" onChange={(event)=> setName(event.target.value)}/>
    <TextField value={rating}  label="Ratings" variant="outlined" onChange={(event)=> setRating(event.target.value)}/>
    <TextField value={trailer}  label="Trailer" variant="outlined" onChange={(event)=> setTrailer(event.target.value)}/>
    <TextField value={summary}  label="Summary" variant="outlined" cols="20" rows="5" onChange={(event)=> setSummary(event.target.value)}/><br></br><br></br>
    
    <Button variant="contained"
    color="success"
    onClick={() => {
      const updatedMovie={
        name:name,
        poster:poster,
        rating:rating,
        summary:summary,
        trailer:trailer,
      };  
      //const copyMovieList=[...movie];
      //copyMovieList[id]=updatedMovie;
      //setMovielist(copyMovieList);  
     // setMovielist([...movieList,newMovie]);
      //useHistory= history.push("/movielist");
      fetch(`${API}/movies/${movie._id}`, {
        method: "PUT",body: JSON.stringify(updatedMovie),
        headers: {"Content-Type": "application/json",},
      }).then(() => history.push("/movielist"));

      
    }}>Save</Button>
    </div >

  );
}


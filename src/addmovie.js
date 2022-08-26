import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import  { API } from "./global";
export default Addmovie;
export function Addmovie()
{
  const[name,setName]=useState("");
  const[poster,setPoster]=useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  const[trailer,setTrailer]=useState("");
  const history= useHistory()
  return(
  <div className="list">
    <TextField  label="Poster Link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField  label="Movie name" variant="outlined" onChange={(event)=> setName(event.target.value)}/>
    <TextField  label="Ratings" variant="outlined" onChange={(event)=> setRating(event.target.value)}/>
    <TextField  label="Trailer" variant="outlined" onChange={(event)=> setTrailer(event.target.value)}/>
    <TextField  label="Summary" variant="outlined" cols="20" rows="5" onChange={(event)=> setSummary(event.target.value)}/><br></br><br></br>
    
    <Button variant="contained"
    onClick={() => {
      const newMovie={
        name:name,
        poster:poster,
        rating:rating,
        summary:summary,
        trailer:trailer
      };    
      console.log(newMovie);
      
      fetch(`${API}/movies`, {
        method: "POST",body: JSON.stringify(newMovie),
        headers: {"Content-Type": "application/json",}
      }).then(() => history.push("/movielist"));
      
    }}>Add movies</Button>
    </div >
  );

}
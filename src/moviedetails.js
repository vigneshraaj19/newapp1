import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import React, {  useEffect } from 'react';
import { useState } from "react";
import { API } from "./global";
export default Moviedetails;
export function Moviedetails()
{ 
  const { _id } = useParams(); //extracting parameter from the url
  const [movieList,setMovielist] = useState({});

  useEffect(() => {fetch(`${API}/movies/${_id}`,
  {method: "GET",}) 
  .then((data) => data.json()) 
  .then((mvs) => setMovielist(mvs));
}, []);
console.log("database",movieList);
  const history= useHistory()

  return(
    <div>
    <Card className="video-card">
  
  <iframe width="100%" height="500" className="video" src={movieList.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <CardContent >
        <h5 className="video-title">{movieList.name}</h5>
        <p className=" pfont-info ">{movieList.summary}</p>
      </CardContent>
</Card>
<div className="backbutton">
    <Button variant="contained" className="backbutton" startIcon={<ArrowBackIosNewIcon />}
    onClick={()=>history.goBack()}>Back</Button>
    </div>
  </div>
);
}
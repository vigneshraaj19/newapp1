import './App.css';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, {  useEffect } from 'react';
import  { API } from "./global";

export default Adder;

function Adder()
{
  const history = useHistory()
  const [movieList,setMovielist] = useState([]);

  const getMovies = () => {fetch(`${API}/movies`, {method: "GET"}) 
  .then((data) => data.json()) 
  .then((mvs) => setMovielist(mvs));};
  
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {fetch(`${API}/movies/${id}`, 
  {method: "DELETE"}).then(() => getMovies());};

  return(
    <div className="card-container">

    {movieList.map(({name,poster,rating,summary,_id}) => (
    
     <Wel
     names={name} 
     posters={poster} 
     ratings={rating} 
     summarys={summary}

     deletebutton={
  
     <IconButton aria-label="delete" color ="error"
     onClick={() =>{ deleteMovie(_id) 
    
    }}> <DeleteIcon /></IconButton>    
    }

     editbutton={
     
     <IconButton 
      onClick={() =>{ history.push(`/movielist/edit/${_id}`)}}
      aria-label="edit" color ="secondary"
    > <EditIcon /></IconButton>
    
    
    }
      
id={_id}
     />))} 

  </div>
      
    );
}


function Like()
{
 const[like,setlike]= useState(0);
 const[Dislike,dislike]= useState(0);
  return(
  <div className="likes">

      
    <IconButton color="primary"onClick={()=>{
    setlike(like+1);
    }}>👍  {like}</IconButton>

     
     <IconButton color="error" onClick={()=>{
    dislike(Dislike+1);
    }}>👎  {Dislike}</IconButton>
     
  </div>
  );
}


function Wel({names,posters,ratings,summarys,deletebutton,editbutton,id})
{
    
  const styles={
    color:ratings>8.0?"green":"red", 
  }
  const history=useHistory(true);
  return(
      
     <Card className='cards'>

       <img 
        className="img"
        src={posters}
        alt="images"
        />
       <CardContent >
           <div className='cardtitle'>
           <span>{names}</span>
           <Tooltip title="Info">
             <IconButton>
             < InfoIcon  className='infoOutlineIcon' color="primary" onClick={() => history.push(`/movielist/${id}`)} aria-label="toogle button"/>
             </IconButton>
             </Tooltip>
             </div>
             <div className="cardtext">
             <span className="rating"> Rating : </span>
          <span className="pfont" style={styles}>{ratings}</span>
        </div>
        <div >
          <Des props={summarys} />
        </div>
        

       </CardContent>


       <CardActions>
          <Like />{deletebutton}{editbutton}
       </CardActions>
    
    </Card>
   
  );
  }
  const Des = ({ props }) => {
    const[show,setShow]= useState(false);
    return (
      <div>
        <div className="description">
        <span> Description: </span>
          <IconButton color="primary" onClick={() => setShow(!show)}>
  
            <span className="primary">{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
          </IconButton>
        </div>
        {!show ? <p className="pfont"> {props} </p> : ""}
      </div>
    );
  };
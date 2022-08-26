import './App.css';
import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';


function Colorgame() {
  const [board, setBoard]=useState([null,null,null,null,null,null,null,null,null]);
  //winner possibilities
   const decideWinner=(board)=>{
     const lines=[
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
     ];
     //checking whether X OR O wins the Game
     for(let i=0;i<lines.length;i++)
     {
       const[a,b,c]=lines[i];
       if(board[a] !== null &board[a]===board[b] && board[b] === board[c])
       {
         console.log("winner is ",board[b]);
         return board[b];
       }
     }
     return null;
   };


   const winner=decideWinner(board);

  const[isXturn,setIsXTurn]=useState(true);
  const handleClick =(index
    ) => {
      //copy the board and replace with 'x' in the clicked gamebox
      //update only untouched boxes and until no winnern
      if(winner ===null && board[index]=== null){
      const boardcopy = [...board];
      console.log(boardcopy,index);
      boardcopy[index] =isXturn ?"x" :"o";
      setBoard(boardcopy);
      //changing x and o for evry action in game
      setIsXTurn(!isXturn);
          //console.log(index);
    }
  };
  const { width, height } = useWindowSize()
  return (
    <div className="fullgame">
      {winner ? <Confetti
      width={width}
      height={height}
    />: ''}
    <div className="board">
    {board.map((val,index) =>(<Gamebox val={val} onPlayerClick={() => handleClick(index)} /> ))}
 </div>
          {winner ? <h2>Winner is: {winner} </h2>:""}
          <br></br>
            <Button variant="contained"onClick={()=>{ setBoard([null,null,null,null,null,null,null,null,null])
          setIsXTurn(true);}}>Restart</Button>

 </div>
  
  );
}
function Gamebox({val, onPlayerClick}) {
  //const val="x";
 // const[val,setVal]=useState(null);
  const styles={
    color:val=="x"? "green":"red", 
  }
  return <div //onClick={() => setVal(val=="x"? "o" : "x")}
  onClick={() =>  onPlayerClick()}style={styles} className="body">{val}</div>;
}

export default Colorgame;


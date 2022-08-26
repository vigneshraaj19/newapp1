import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default ColorBox;

function ColorBox()
{
  const[color,setColor] = useState("");
  const styles={
  background:color,
  };
  const[colorList,setColorList]=useState(["red","blue","green"]);
  return(
    <div className='center'>

<TextField
          id="outlined-required"
          label="Enter the color"
          onChange={(event)=> setColor(event.target.value)}
        />
<br></br>

      <Button variant="contained"onClick={() => setColorList([...colorList,color])}>Add Color</Button>
      {colorList.map((item)=>(
        <Bolorbox color={item} />
      ))}
    </div>
  );
  }
  function Bolorbox({color})
  {
    const styles={
      backgroundColor:color,
      height:"25px",
      width:"200px",
      marginTop:"10px",
    };
    return<div style={styles}></div>;
  }



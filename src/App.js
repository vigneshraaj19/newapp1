import React from "react";
import Colorgame from "./Colorgame.js";
import ColorBox from "./addcolor.js";
import Adder from "./movielist.js";
import Moviedetails from "./moviedetails"; 
import Addmovie from "./addmovie";
import Formvalidation from "./form validation.js";
import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from "@mui/material/Button";
import { EditMovie } from "./EditMovie.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';

export default function App() {
  


 const [mode,setMode]=useState("light");
 const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Paper style={{borderRadius:"0px",minHeight:"100vh"}}elevation={0} >
     
      
       
        <AppBar position="static">
        <Toolbar>
          
{/* hi */}
        <Button  color="inherit" component={Link} to="/" >  <Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Home</Box></Button>
        <Button color="inherit" component={Link} to="/movielist" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Movie List</Box></Button>
        <Button color="inherit" component={Link} to="/movielist/Addmovie" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add Movie</Box></Button>
        <Button color="inherit" component={Link} to="/Colorgame" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Tie Tac Tac</Box></Button>
        <Button color="inherit" component={Link} to="/addcolor" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add color</Box></Button>
        <Button color="inherit" component={Link} to="/Form" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Form Validation</Box></Button>
          <Button color="inherit" 
          style={{marginLeft:"auto"}}
              startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              onClick={()=>setMode(mode==="light"? "dark" : "light")} >
              {mode==="light"? "dark" : "light"} Mode
         </Button>
        </Toolbar>
      </AppBar>
      
      <div  className="router-container">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Colorgame">
            <Colorgame /> 
          </Route>
          <Route path="/Form">
          <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
            <Formvalidation /> 
            </div>
            </div>
            </div>
          </Route>

          <Route path="/addcolor">
            <ColorBox />
          </Route>
          <Route path="/movielist/Addmovie"> 
            <Addmovie />
          </Route>

          <Route path="/movielist/edit/:_id"> 
          <EditMovie  />
          </Route>
 
            {/*makes  thr id a variable*/}
            <Route path="/movielist/:_id"> 
            <Moviedetails  />
          </Route>

          <Route path="/movielist"> 
            <Adder   />
          </Route>

          {/* <Route exact path="**">
            <Error />
          </Route> */}

        </Switch> 
        </div>
        
     
      
      </Paper>
      </ThemeProvider>
      </Router>
    
  );
}
function Home() {
  return <h2 className="mainpage">Welcome to react app👍😒</h2>;
}
function Error()
{
  return(
    <img className="errors" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404 Error"></img>
  );
}








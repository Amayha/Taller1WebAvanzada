import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import Trabajo from '../Trabajo/Trabajo';


function App() {
  const classes = useStyles();

  return (
   
      <div className={classes.app}>
        <Header></Header>
        <NavBar></NavBar>
        <div className={classes.panels}>
         <Trabajo></Trabajo>
        </div>

      </div>

  


  );
}

const useStyles = makeStyles({
  panels: {
    display: 'flex',
    flexDirection: 'row',
  },
  left:{
    flexBasis: '50%'
  },

  rigth:{
    flexBasis:'50%',
  }

});

export default App;

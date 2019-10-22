import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';
import Todo from '../../containers/Todo/Todo'
import Courses from '../../containers/Courses/Courses'
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';


function App() {
  const classes = useStyles();

  return (
   
      <div className={classes.app}>
        <Header></Header>
        <NavBar></NavBar>
        <div className={classes.panels}>
          <div className={classes.left}>
           <Courses></Courses>
          </div>
          <div className={classes.rigth}>
            <Todo></Todo>
          </div>
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

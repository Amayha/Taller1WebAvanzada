import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import Trabajo from '../Trabajo/Trabajo';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import MateriasData from '../../components/Data/Materias.json';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';
import Stats from '../../containers/Stats/Stats'

function App() {
  const classes = useStyles();

  const [materias, setMaterias] = React.useState(MateriasData);
  //Cuando inicia se supone es la primer materia
  const [materiaSelect, setMateriaSelect] = React.useState(0);

  const context = {
    materias: materias,
    setMaterias: setMaterias,
    materiaSelect: materiaSelect,
    setMateriaSelect
  }




  return (
    <MateriasDataCtx.Provider value={context} >
      <Router>
        <div className={classes.contenedor}>
          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <div className={classes.app}>
                <Header></Header>
                <NavBar></NavBar>
                <div className={classes.panels}>
                  <Trabajo></Trabajo>
                </div>
              </div>
            </Route>

            <Route path="/stats" exact>
              <Header></Header>
              <NavBar></NavBar>
              <Stats />
            </Route>

            <Route path="/about">
              <h1>Pagina About</h1>
            </Route>

          </Switch>
        </div>
      </Router>
    </MateriasDataCtx.Provider>
  );
}

const useStyles = makeStyles({
  panels: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    flexBasis: '50%'
  },

  rigth: {
    flexBasis: '50%',
  },
  contenedor: {
    fontFamily: 'Century Gothic, Lato, sans-serif',
  },

});

export default App;

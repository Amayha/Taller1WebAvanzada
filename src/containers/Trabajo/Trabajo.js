import React from 'react';
import ToDoList from '../../containers/TodoList/TodoList';
import MateriasData from '../../components/Data/Materias.json';
import Materias from '../../components/Materias/Materias'
import { makeStyles } from '@material-ui/core/styles';

function Trabajo(props) {
    const classes = useStyles();

    const [materias, setMaterias] = React.useState(MateriasData);
    //Cuando inicia se supone es la primer materia
    const [materiaSelect, setMateriaSelect] = React.useState(0); 

    const actualizaMateriaSelect = materiaSelect => {
        setMateriaSelect(materiaSelect);
        console.log("MateriaSelect: " + materiaSelect);
    }

    const addTareaMateria = tarea => {
        //Adicionamos la tarea nueva a la materia que esta seleccionada
        const addTareaNueva = materias.map((materia) => {
            const indice = materiaSelect + 1;
            if(materia.idMateria === indice)
                materia.tareas.push(tarea);
            
            return materia;
        });
        //const nuevaTarea = [...tareas, objTarea];
        setMaterias(addTareaNueva);
        console.log('Trea adicionada..' + tarea.titulo);
    }

    return (
        <div className={classes.panels}>
            <div className={classes.left}>
                <Materias materias={materias} 
                    materiaSelect={materiaSelect}
                    actualizaMateriaSelect={actualizaMateriaSelect}
                />
            </div>
           
            <div className={classes.rigth}>
                <ToDoList materia={materias[materiaSelect]} 
                        addTareaMateria={addTareaMateria}
                />
            </div>
           
        </div>
    )
}

const useStyles = makeStyles({
    panels: {
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '100%',
      textDecoration: 'none',
    },
    left:{
      flexBasis: '50%'
    },
  
    rigth:{
      flexBasis:'50%',
      backgroundColor:'#fffcd6',
    }
  
  });

export default Trabajo;
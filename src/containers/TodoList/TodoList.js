import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tareas from '../../components/Tareas/Tareas';
import { flexbox } from '@material-ui/system';
import TaskForm from '../../components/TaskForm/TaskForm';
import Card from '@material-ui/core/Card';


function TodoList(props) {

    const classes = useStyles();

    //const [tareas, setTareas] = React.useState([]);

    const addTarea = tarea => {
        const objTarea = { idTarea: Date.now(), titulo: tarea, completada: false };
        //const nuevaTarea = [...tareas, objTarea];
        //setTareas(nuevaTarea);
        props.addTareaMateria(objTarea);
        console.log('Trea adicionada..' + tarea);
    }

    const actualizarEstadoTarea = idTarea => {
        props.cambiarEstadoTarea(idTarea);
        console.log('Estado Trea actualizado..' + idTarea);
    }

    console.log(props.materia);
    return (
        <Card className={classes.forma}>
            <h1 className={classes.nombreDeLaMateria}>{props.nombreMateria}</h1>
            <TaskForm addTarea={addTarea} />
            <Tareas tareas={props.materia.tareas}
                actualizarEstadoTarea={actualizarEstadoTarea}
            />
        </Card>

    )
}


const useStyles = makeStyles({
    forma: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        paddingLeft: '20px',
        margin: '20px',
        marginBottom: '100px',
        minHeight: '700px',
    },
    nombreDeLaMateria:{
        color: '#3f51b5',
    },


});

export default TodoList;
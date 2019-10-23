import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tareas from '../../components/Tareas/Tareas';
import { flexbox } from '@material-ui/system';
import TaskForm from '../../components/TaskForm/TaskForm';


function TodoList(props) {

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
    <div>
        <h1>{props.nombreMateria}</h1>
        <TaskForm addTarea={addTarea} />
        <Tareas tareas={props.materia.tareas}
            actualizarEstadoTarea={actualizarEstadoTarea}
        />
    </div>
)
}


const useStyles = makeStyles(theme => ({

    contendor: {
        display: 'flex',
        flexDirection: 'column',

    },



}));

export default TodoList;
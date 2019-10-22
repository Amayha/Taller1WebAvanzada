import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tareas from '../../components/Tareas/Tareas';
import { flexbox } from '@material-ui/system';
import TaskForm from '../../components/TaskForm/TaskForm';


function TodoList(props) {

    //const [tareas, setTareas] = React.useState([]);

    const addTarea = tarea => {
        const objTarea = { idTarea: Date.now(), titulo: tarea};
        //const nuevaTarea = [...tareas, objTarea];
        //setTareas(nuevaTarea);
        props.addTareaMateria(objTarea);
        console.log('Trea adicionada..' + tarea);
    }
/*
    const delTarea = llave => {
        var nuevaListaTareas = tareas.filter(function (item){
            console.log(item.idTarea + ' <> ' + llave);
            return (item.idTarea !== llave)
        });
        console.log(nuevaListaTareas);
        setTareas(nuevaListaTareas);
    }

    const chulearTarea = (tarea)=>{
       //setTareas.
        console.log(tarea.estadoTarea);
    }
*/
console.log(props.materia);
    return (
        <div>
            <TaskForm addTarea={addTarea} />
            <Tareas tareas={props.materia.tareas}
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
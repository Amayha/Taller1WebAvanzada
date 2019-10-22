import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoCard from '../../components/Todocard/TodoCard';
import { flexbox } from '@material-ui/system';
import TaskForm from '../../components/TaskForm/TaskForm';


function Todo() {

    const [tareas, setTareas] = React.useState([]);

    const addTarea = tarea => {
        const objTarea = { idTarea: Date(), titulo: tarea};
        const nuevaTarea = [...tareas, objTarea];
        setTareas(nuevaTarea);
        console.log('Trea adicionada..' + tarea);
    }

    const delTarea = llave => {
        var nuevaListaTareas = tareas.filter(function (item){
            console.log(item.idTarea + ' <> ' + llave);
            return (item.idTarea !== llave)
        });
        console.log(nuevaListaTareas);
        setTareas(nuevaListaTareas);
    }
    return (
        <div>
            <TaskForm addTarea={addTarea} />
            <TodoCard tareas={tareas}
                    delete={delTarea}
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

export default Todo;
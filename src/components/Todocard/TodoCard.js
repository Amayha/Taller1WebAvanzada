import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import FlipMove from "react-flip-move";


function TodoCard(props) {
    console.log('Dentro de tareas');
    const crearTarea = (ta) => {
        return (
            <li onClick={() => borrarTarea(ta.idTarea)}
                key={ta.idTarea} >
                {ta.titulo}
            </li>
        )
    }

    function borrarTarea(llave) {
        console.log('borrarTarea: ' + llave);
        props.delete(llave);
    }

    var listadotareas = props.tareas;
    var listadoItems = listadotareas.map(crearTarea);
    return (
        <ul>
            <FlipMove duration={250} easing="ease-out">
                {listadoItems}
            </FlipMove>
        </ul>
    )
}
const useStyles = makeStyles({
    card: {
        height: '150px',
        display: 'flex',
        flexDirection: 'row',
    },
   
});

export default TodoCard;
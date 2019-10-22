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
    var estado;
    const classes = useStyles();

    const crearTarea = (ta) => {
        return (
            <li onClick={() => borrarTarea(ta.idTarea)} className={classes.lista} >
                <Card key={ta.idTarea}>
                    <CardContent>
                        {ta.titulo}
                        <Checkbox checked={estado}></Checkbox>
                    </CardContent>

                </Card>

            </li>

        )
    }

    function borrarTarea(llave) {
        console.log('borrarTarea: ' + llave);
        //  props.delete(llave);
    }

   /* function actualizarEstadoTarea(ta) {
        props.chulear(ta);
    }*/

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
    lista: {
        display: 'flex',
        listStyleType: 'none',
    },

});

export default TodoCard;
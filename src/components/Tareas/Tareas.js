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
    
    const classes = useStyles();
    
    const crearTarea = (ta) => {
        var estado = ta.completada;
        return (
            <li className={classes.lista} >
                <Card key={ta.idTarea} className={classes.card}>
                    <CardContent className={classes.contenido}>
                        {ta.titulo}
                    </CardContent>
                    <div className={classes.chulo}>
                            <Checkbox checked={estado}
                                onClick={() => tareaCompleta(ta.idTarea)}
                            ></Checkbox>
                        </div>
                </Card>

            </li>

        )
    }

    function borrarTarea(llave) {
        console.log('borrarTarea: ' + llave);
        //  props.delete(llave);
    }

    function tareaCompleta(llave) {
        props.actualizarEstadoTarea(llave);
        console.log('Tarea chuleada...' + llave);
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
        height: '100px',
        width: '500px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        margin: '10px',
    },
    lista: {
        display: 'flex',
        listStyleType: 'none',
    },
    contenido: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginBottom: '0px',
    },
    chulo:{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '5px',
    },

});

export default TodoCard;
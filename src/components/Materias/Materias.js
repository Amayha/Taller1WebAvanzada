import React from 'react';
import FlipMove from "react-flip-move";
import { makeStyles, CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Materias(props) {
    const classes = useStyles();

    const crearMateria = (ma) => {
        //Calcular el % de tareas completadas
        var totTareas = 0;
        var nTareasCompletadas = 0;
        
        ma.tareas.forEach(tarea => {
            totTareas += 1;
            if (tarea.completada) {
                nTareasCompletadas += 1;
                console.log('% completada adicionado: ' + nTareasCompletadas);
            }
        });
        var completado = 0;
        if (totTareas != 0)
            completado = Math.floor(nTareasCompletadas / totTareas * 100);

        console.log('% completada: ' + completado + ' totTareas: ' + totTareas);

        if (ma.idMateria === props.materiaSelect + 1) {
            var cssCard = classes.materiaSelect;
        } else {
            var cssCard = classes.materiaNoSelect;
        }
        return (
            <Card className={cssCard} onClick={() => actualizaMateriaSelect(ma.idMateria)}
                key={ma.idMateria} >
                <CardContent >
                    <Typography className={classes.title}>
                        {ma.titulo}
                        <br />
                        {ma.description}
                    </Typography>

                </CardContent>
                <br />
                <div className={classes.barra}>
                    <ProgressBar completado={completado}></ProgressBar>
                </div>
            </Card>
        )
    }

    function actualizaMateriaSelect(llave) {
        console.log('actualizarMateriaSelect: ' + llave);
        props.actualizaMateriaSelect(llave - 1);
    }

    var listadoMaterias = props.materias;
    var listadoItems = listadoMaterias.map(crearMateria);

    return (
        <Card className={classes.contenedor}>
            <div className={classes.sub}>
                <div >
                    <h1 classes={classes.tituloMaterias}>Materias</h1>
                </div>
                <ul className={classes.lista}>
                    <FlipMove duration={250} easing="ease-out">
                        {listadoItems}
                    </FlipMove>
                </ul>

            </div>

        </Card>
    )
}

const useStyles = makeStyles({
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        listStyleType: 'none',
        paddingLeft: '20px',
        margin: '20px',
        marginBottom: '100px',
        minHeight: '700px',
    },
    sub:{
        display: 'flex',
        flexDirection: 'column',
    },

    lista: {
        display: 'flex',
        listStyleType: 'none',
        margin: '20px',
        marginTop: '0px',
        listStyle: 'none',
        paddingLeft: '0',
        width: '100%',
        height: '100%',

    },
    title: {
        fontSize: 20,

    },
    barra: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    materiaSelect: {
        backgroundColor: "#66b1f1",
        color: '#ffffff',
        height: '150px',
        width: '700px',
        margin: '15px',
        marginLeft:'0px',
    },
    materiaNoSelect: {
        backgroundColor: "#ffffff",
        height: '150px',
        width: '700px',
        margin: '15px',
        marginLeft:'0px',
    },
    tituloMaterias: {
        padding: '30px',
        paddingBottom: '0px',
        backgroundColor: "#ff7755",
        color: '#3f51b5',
        flexDirection: 'row',
        justifyContent: 'center',
    },

});
export default Materias;
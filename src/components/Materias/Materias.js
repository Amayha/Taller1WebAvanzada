import React from 'react';
import FlipMove from "react-flip-move";
import { makeStyles, CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Materias(props) {
    const classes = useStyles();

    const crearMateria = (ma) => {
        //Calcular el % de tareas completadas
        var totTareas=0;
        var nTareasCompletadas=0;
        ma.tareas.forEach(tarea => {
            totTareas += 1;
            if(tarea.completada){
                nTareasCompletadas += 1;
                console.log('% completada adicionado: ' + nTareasCompletadas );
            }
        });
        var completado = 0;
        if(totTareas != 0) 
            completado = Math.floor(nTareasCompletadas / totTareas * 100);
        
        console.log('% completada: ' + completado + ' totTareas: ' +  totTareas);

        if(ma.idMateria === props.materiaSelect + 1){
            var cssCard = classes.materiaSelect;
        }else{
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
        <div>
            <h1>Materias...</h1>
            <ul>
                <FlipMove duration={250} easing="ease-out">
                    {listadoItems}
                </FlipMove>
            </ul>
        </div>
    )
}

const useStyles = makeStyles({
    lista: {
        display: 'flex',
        listStyleType: 'none',
    },
    card: {
        height: '150px',
        margin: '10px',
    },
    title: {
        fontSize: 20,
    },
    barra: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    materiaSelect: {
        backgroundColor: "#ff7755"
    },
    materiaNoSelect: {
        backgroundColor: "#ffffff"
    },

});
export default Materias;
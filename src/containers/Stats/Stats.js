import React from 'react';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import { VictoryPie } from 'victory';

function Stats() {
    const classes = useStyles();

    const datos = React.useContext(MateriasDataCtx);
    var datosMateria = [];

    datos.materias.forEach((materia, index) => {
        var totTareas = 0;
        var nTareasCompletadas = 0;
        materia.tareas.forEach(tarea => {
            totTareas += 1;
            if (tarea.completada) {
                nTareasCompletadas += 1;
                console.log('% completada adicionado: ' + nTareasCompletadas);
            }
        });
        var nTareasNoCompletadas = totTareas - nTareasCompletadas;

        var datosTabular = [];
        if (totTareas > 0) {
            datosTabular = [ { x: 2, y: nTareasCompletadas, nombreEje: "Completadas", nombreMateria: materia.titulo },{ x: 1, y: nTareasNoCompletadas, nombreEje: "Sin Completar", nombreMateria: materia.titulo }];
        } else {
            datosTabular = [
                { x: 2, y: 0,  nombreMateria: materia.titulo, nombreEje: "Completadas" },
                { x: 1, y: 1,  nombreMateria: materia.titulo, nombreEje: "Sin Completar" }];
        }

        datosMateria.push(datosTabular);
        //datosMateria.push(datosTabular2);
    });



    const listItems = datosMateria.map((materia) => {
        return (
            <div className={classes.contenedor} >
                <h1>{materia[0].nombreMateria}</h1>
                <VictoryPie data={materia}
                    
                    innerRadius={70}
                    labelRadius={90}
                    colorScale={["#3f51b5", "#e6e6e6",]}
                    labelPosition="centroid"
                    style={{ labels: { fill: "black", fontSize: 16, fontWeight: "regular", fontFamily: 'Century Gothic, Lato, sans-serif, Bold' } }}
                    labels={({ datum }) => `${datum.nombreEje}: ${datum.y}`}
                />
            </div>
        )
    });

    return (
        <div className={classes.cont}>
            <div className={classes.texto}>
                <p className={classes.textico}>Aqui puedes encontrar tus estadisticas diarias</p>
            </div>
            <div className={classes.graficos}>
                <div className={classes.circle}>
                    {listItems}
                </div>
            </div>



        </div>
    );
}

const useStyles = makeStyles({
    circle: {
        flexDirection: 'row',
        backgroundColor: '#ffed4c',
        flexFlow: 'row wrap',
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    cont: {
        fontFamily: 'Century Gothic, Lato, sans-serif,',
        margin: '5px',
        flexDirection: 'row',
    },

    graficos: {
        display: 'flex',
        flexDirection: 'row',
        //justifyContent: 'center',
        backgroundColor: '#ef7b7e',
        flexFlow: 'row wrap',
    },

    texto: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textico: {
        fontFamily: 'Century Gothic, Lato, sans-serif',
        fontSize: '20px',
    },
    contenedor: {
        display: 'flex',
        flexDirection: 'column',
       
        width: '400px',

    },


});

export default Stats;
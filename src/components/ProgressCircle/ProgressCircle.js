import React from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';

function ProgressCircle() {

    const classes = useStyles();
    const datos = React.useContext(MateriasDataCtx);

    var tareasRealizadas = 5;
    var tareasFaltan = 5;

    var data = [
        { x: "Done", y: tareasRealizadas },
        { x: "Not yet", y: tareasFaltan },

    ];


    return (
        <div className={classes.contenedor}>
            <VictoryPie
                data={data}
                animate={{
                    duration: 2000
                }}
                innerRadius={70}
                labelRadius={90}
                colorScale={["#3f51b5", "#e6e6e6",]}
                labelPosition="centroid"
                style={{ labels: { fill: "black", fontSize: 16, fontWeight: "regular", fontFamily:'Century Gothic, Lato, sans-serif, Bold'} }}
            />
        </div>
    );
}

const useStyles = makeStyles({
    contenedor: {
        height: '400px',
        width: '400px',
      
    },


});

export default ProgressCircle;
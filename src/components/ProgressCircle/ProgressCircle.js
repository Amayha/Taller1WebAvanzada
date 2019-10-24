import React from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory';
import { makeStyles } from '@material-ui/core/styles';

function ProgressCircle() {

    const classes = useStyles();

    var data = [
        { x: "Done", y: 5 },
        { x: "Not yet", y: 15 },

    ];


    return (
        <div className={classes.contenedor}>
            <VictoryPie
                data={data}
                animate={{
                    duration: 2000
                }}
                innerRadius={70}
                colorScale={["#3f51b5", "#e6e6e6",]}
                labels={({ datum }) => datum.x}
                labelPosition="centroid"
                style={{ labels: { fill: "black", fontSize: 16, fontWeight: "regular", fontFamily:'Century Gothic, Lato, sans-serif'} }}
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
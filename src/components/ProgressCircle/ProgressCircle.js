import React from 'react';
import * as V from 'victory';
import { VictoryPie } from 'victory';
import { makeStyles } from '@material-ui/core/styles';

function ProgressCircle() {

    const classes = useStyles();

    var data = [
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
        { x: "Bear", y: 5 }
    ];


    return (
        <div className={classes.contenedor}>
            <VictoryPie
                data={data}
                animate={{
                    duration: 2000
                }}
            />
        </div>
    );
}

const useStyles = makeStyles({
    contenedor: {
        height: '500px',
        width: '500px',
        
    },
 

});

export default ProgressCircle;
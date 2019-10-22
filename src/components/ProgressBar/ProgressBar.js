import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

//esta grafica es para cada materia, se obtiene segun las tareas cumplidas 

function ProgressBar() {
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    var tasksCompleted = 70;
   
    const progress = React.useRef(() => { });
    React.useEffect(() => {
        setCompleted(tasksCompleted);
        progress.current = () => {
            if (completed > 100) {
                setCompleted(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setCompleted(completed + diff);
                setBuffer(completed  );
            }
        };
    });

    React.useEffect(() => {
        function tick() {
            progress.current();
        }
        const timer = setInterval(tick, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
            <h2 className={classes.number}>{tasksCompleted}%</h2>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 0,
    },
    number:{
        margin: 0,
    }
});

export default ProgressBar;
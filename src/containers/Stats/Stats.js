import React from 'react';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

function Stats() {

    const datos = React.useContext(MateriasDataCtx);
    const classes = useStyles();

    return (
        <div className={classes.cont}>
            <div className={classes.texto}>
            <p className={classes.textico}>Aqui puedes encontrar tus estadisticas diarias</p>
            </div>
            <h2>{datos.materias[datos.materiaSelect].titulo}</h2>
            <div className={classes.circle}>
            <ProgressCircle ></ProgressCircle>
            </div>
            
            
        </div>
    );
}

const useStyles = makeStyles({
    circle: {
        height: '1000px',
        width: '1000px',
      

    },
    cont:{
        fontFamily: 'Century Gothic, Lato, sans-serif,',
    },

    texto:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },


});

export default Stats;
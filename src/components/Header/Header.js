import React from 'react';
import {makeStyles } from '@material-ui/core'
import { flexbox } from '@material-ui/system';

function Header() {

    const classes = useStyles();



    return (
        <div className={classes.contenedor}>
            <h1 className={classes.titulo}>My TODO App</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({

    contenedor:{
        display: 'flex',
        background: '#dcf8c6',
        flexDirection: 'row',
        justifyContent : 'center',
    },

    titulo:{
       
        color: '#52a6e0',
        fontSize: 50,
    },

}));

export default Header;
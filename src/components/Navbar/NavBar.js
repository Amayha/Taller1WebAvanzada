import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.nav}>
                <div className={classes.contenedor}>
                    <Link to="/" className={classes.a}>Home </Link>
                </div>
                <div className={classes.contenedor}>
                    <Link to="/stats" className={classes.a}>Stats </Link>
                </div>
                <div className={classes.contenedor}>
                    <Link to="/about" className={classes.a}>About</Link>
                </div>

            </div>

            <div>
                <hr className={classes.linea}></hr>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    nav: {
        fontFamily: 'Century Gothic, Lato, sans-serif',
        textDecoration: 'none',
        fontSize:'150%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '70px',
        alignItems: 'center',
        padding: '0px',
    },
    a: {
        textDecoration: 'none',
        color: 'black',
    },
    contenedor: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '33%',
        height: '40px',
        backgroundColor: '#ffffff',
        margin:'0px',
        padding: '0px',

        '& :hover': {
            color: '#ffffff',
            backgroundColor: '#66b1f1',
            transition: 'all 0.5s ease',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            margin:'0px',
            padding: '0px',
        },

    },
    linea: {
        width: '100%',
        height: '3px',
        backgroundColor: '#66b1f1',
        border: 'none',
        margin:'0px',
        padding: '0px',
    },



});

export default NavBar;
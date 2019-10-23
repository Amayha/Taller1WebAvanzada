import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {

    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <div>
                <Link to="/">Home </Link>
            </div>
            <div>
                <Link to="/stats">Stats </Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>

        </div>
    );
}

const useStyles = makeStyles({
    nav: {
        backgroundColor: '#ffebed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '50px',
    },


});

export default NavBar;
import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PieChartIcon from '@material-ui/icons/PieChart';
import ViewListIcon from '@material-ui/icons/ViewList';
import FaceIcon from '@material-ui/icons/Face';

function NavBar() {

    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    function handleChange(event, newValue) {
        setValue(newValue);
    }


    return (
        <BottomNavigation  value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" icon={<ViewListIcon />} />
            <BottomNavigationAction label="Stats" value="stats" icon={<PieChartIcon />} />
            <BottomNavigationAction label="About Us" value="about" icon={<FaceIcon />} />
            
        </BottomNavigation>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background : '#fbd1a6',
    }
}));

export default NavBar;
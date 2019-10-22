import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../ProgressBar/ProgressBar';


function CourseCard(props) {
    const classes = useStyles();

    return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.nombre}
                    </Typography>
                    <br/>
                    <ProgressBar></ProgressBar>
                </CardContent>
            </Card>

    );
}


const useStyles = makeStyles({
    card: {
        height: '150px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default CourseCard;
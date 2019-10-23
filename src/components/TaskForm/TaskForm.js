import React from 'react';
import { flexbox } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';


function TaskForm(props) {

    const classes = useStyles();

    const [tarea, setTarea] = React.useState("");

    const onSubmit = e => {
        console.log(tarea);
        props.addTarea(tarea);
        setTarea("");
        e.preventDefault();
    }
    const onChange = e => {
        setTarea(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className={classes.forma}>
                <div className={classes.text}>
                    <input
                        type="text"
                        placeholder="Ingrese la tarea ..."
                        onChange={onChange}
                        value={tarea}
                        className={classes.input}
                    >
                    </input>
                </div>
                <div className={classes.enviar}>
                    <input type="submit" className={classes.boton}></input>
                </div>

            </form>
        </div>
    );
}

const useStyles = makeStyles({
    input: {
        height: '25px',
        width: '500px',
        border: '2px solid #3f51b5',
        borderRadius: '10px',
        padding: '5px',
    },
    text:{
        paddingLeft: '30px',
    },
    enviar:{
        paddingRight: '50px',
    },

    forma:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        listStyle: 'none',
        paddingLeft: '0',

    },

    boton:{
        height: '50px',
        width: '100px',
        color: '#fff',
        background:'#3f51b5',
        borderRadius: '50px',
        border: 'none',
        transition: 'all 0.4s ease 0s',

        '&:hover':{
            textShadow: '0px 0px 6px rgba(255, 255, 255, 1)',
            webkitBoxShadow: '0px 5px 40px -10px rgba(0,0,0,0.57)',
            mozBoxShadow: '0px 5px 40px -10px rgba(0,0,0,0.57)',
            transition: 'all 0.4s ease 0s',
        }

    },


});

export default TaskForm;
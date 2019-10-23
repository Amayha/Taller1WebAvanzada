import React from 'react';
import ToDoList from '../../containers/TodoList/TodoList';
import MateriasData from '../../components/Data/Materias.json';
import Materias from '../../components/Materias/Materias'
import { makeStyles } from '@material-ui/core/styles';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';

function Trabajo(props) {
    const classes = useStyles();

    const datos = React.useContext(MateriasDataCtx)

    //const [materias, setMaterias] = React.useState(MateriasData);
    //Cuando inicia se supone es la primer materia
    //const [materiaSelect, setMateriaSelect] = React.useState(0);

    const actualizaMateriaSelect = materiaSelect => {
        datos.setMateriaSelect(materiaSelect);
        console.log("MateriaSelect: " + materiaSelect);
    }

    const addTareaMateria = tarea => {
        //Adicionamos la tarea nueva a la materia que esta seleccionada
        const addTareaNueva = datos.materias.map((materia) => {
            const indice = datos.materiaSelect + 1;
            if (materia.idMateria === indice)
                materia.tareas.push(tarea);

            return materia;
        });
        //const nuevaTarea = [...tareas, objTarea];
        datos.setMaterias(addTareaNueva);
        console.log('Trea adicionada..' + tarea.titulo);
    }

    const cambiarEstadoTareaMateria = idTarea => {
          //Cambiamos el esatdo de la tarea a la materia que esta seleccionada
          const estadoActualizadoTareas = datos.materias.map((materia) => {
            const indice = datos.materiaSelect + 1;
            if (materia.idMateria === indice){
                //Recorrer las tareas para cambiarle el estado a la tarea que chulean
                materia.tareas.forEach(tarea => {
                    if(tarea.idTarea === idTarea){
                        //Esta es la tarea al aque le hicieron click en el checkbox
                        tarea.completada = !tarea.completada;
                        console.log('cambiaEstadoTarea: ' + idTarea + ' A la materia: ' + indice + ' NuevosEstado: ' + tarea.completada );
                    }
                });
            }

            return materia;
        });
        datos.setMaterias(estadoActualizadoTareas);
        console.log('cambiaEstadoTarea: ' + idTarea);
    }


    return (
        <div className={classes.panels}>
            <div className={classes.left}>
                <Materias materias={datos.materias}
                    materiaSelect={datos.materiaSelect}
                    actualizaMateriaSelect={actualizaMateriaSelect}
                />
            </div>

            <div className={classes.rigth}>
                <ToDoList materia={datos.materias[datos.materiaSelect]}
                    nombreMateria={datos.materias[datos.materiaSelect].titulo}
                    addTareaMateria={addTareaMateria}
                    cambiarEstadoTarea={cambiarEstadoTareaMateria }

                    />
            </div>

        </div>
    )
}

const useStyles = makeStyles({
    panels: {
        display: 'flex',
        flexDirection: 'row',
        flexBasis: '100%',
        textDecoration: 'none',
    },
    left: {
        flexBasis: '50%'
    },

    rigth: {
        flexBasis: '50%',
        backgroundColor: '#fffcd6',
    }

});

export default Trabajo;
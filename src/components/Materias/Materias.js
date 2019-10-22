import React from 'react';
import FlipMove from "react-flip-move";
import CourseCard from '../../components/CourseCard/CourseCard';
import { makeStyles } from '@material-ui/core';

function Materias(props) {
    const classes = useStyles();

    const crearMateria = (ma) => {
        return (
            <li onClick={() => actualizaMateriaSelect(ma.idMateria)}
                key={ma.idMateria} >
                {ma.titulo}
            </li>
        )
    }

    function actualizaMateriaSelect(llave) {
        console.log('actualizarMateriaSelect: ' + llave);
        props.actualizaMateriaSelect(llave - 1);
    }

    var listadoMaterias = props.materias;
    var listadoItems = listadoMaterias.map(crearMateria);

    return (
        <div>
            <h1>Materias...</h1>
            <ul>

                <FlipMove duration={250} easing="ease-out">
                    {listadoItems}
                </FlipMove>
            </ul>
        </div>
    )
}
const useStyles = makeStyles({
    lista: {
        display: 'flex',
        listStyleType: 'none',
    },


});
export default Materias;
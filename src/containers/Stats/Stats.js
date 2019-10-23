import React from 'react';
import MateriasDataCtx from '../../components/MateriasDataCtx/MateriasDataCtx';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';

function Stats() {

    const datos = React.useContext(MateriasDataCtx);

    return (
        <div className=''>
            <h2>{datos.materias[datos.materiaSelect].titulo}</h2>
            <ProgressCircle></ProgressCircle>
            
        </div>
    );
}

export default Stats;
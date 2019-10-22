import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Grid } from '@material-ui/core';

function Todo() {

    
    return <div className=''>
        <h1>Lista de materias</h1>
        <Grid container spacing={3} direction={"column"} >
            {courses && courses.map((item) => {
                return <Grid item md={12} xs={12} key={item.day} >
                    <CourseCard
                        {...item}
                    />
                </Grid>
            })}
        </Grid>

    </div>
}

export default Todo;
import React from 'react';


function TaskForm(props) {
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
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Igrese la tarea ..."
                    onChange={onChange}
                    value={tarea}>
                </input>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default TaskForm;
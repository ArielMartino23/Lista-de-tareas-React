import React, {useState} from "react";
import '../styles-sheet/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'

function TaskForm(props){

    const [input, setInput] = useState();

    const manageChange = e => {
        setInput(e.target.value);
    }

    const manageSend = e => {
        e.preventDefault();
        const newTask = {
            id:uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask);
    }

    return(
        <form 
            className='task-form'
            onSubmit={manageSend}>
            <input 
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
                onChange={manageChange}
            />
            <button className='task-button'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TaskForm;
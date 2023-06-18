import React, { useState } from "react";
import './TodoList.css';
import SlidingButton from "../resources/SlidingButton";
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus } from "react-icons/ai"
//import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
import Task from "./Task";
function TodoList () {
    const [state, setState] = useState({task: []})
    console.log('el estado de state', state)
    setState({ 
        tasks : [
            { id: uuidv4() ,name : 'Meditate after wake up', done: false},
            { id: uuidv4() ,name : 'make bed', done: false},
            { id: uuidv4() ,name : 'brush tooth', done: false},
            { id: uuidv4() ,name : 'breakfast', done: false},
            { id: uuidv4() ,name : 'study react', done: false},
            { id: uuidv4() ,name : 'improve arkanoid', done: false},
        ] 
    })
    console.log('despues de setState', state)
    function markTask(id) {
        const newTasks = state.tasks.map((task) => {
            if (id === task.id) {
                return Object.assign({}, task, task.done ? true: {done:false}, {done: true});
            }
            else
                return task;
        })
        setState({ tasks: newTasks})
    }
    console.log(state)
    return(      
        <div className="list-container">
            <h3 className='heading-list'>world domination</h3>
            <ul className="list"> 
                { state.tasks.map((task) => {
                    return(
                        <Task key={task.id} id={task.id} name={task.name} done={task.done} onClick={markTask}/>
                    )
                })}
                {/* <li className='list__item'><MdCheckBoxOutlineBlank className="list__icon"/>Meditate after wake up</li>
                <li className='list__item'><MdCheckBoxOutlineBlank className="list__icon"/>make bed</li>
                <li className='list__item'><MdCheckBoxOutlineBlank className="list__icon"/>brush tooth</li>
                <li className='list__item'><MdCheckBoxOutlineBlank className="list__icon"/>breakfast</li>
                <li className='list__item'><MdCheckBoxOutlineBlank />study react</li>
                <li className='list__item' ><MdCheckBoxOutlineBlank className="list__icon"/>improve arkanoid</li> */}
                <SlidingButton text='new task' link='#'> <AiOutlinePlus className="list__icon"/></SlidingButton>
            </ul>
        </div>
            )
    }
export default TodoList
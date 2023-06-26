import React, {  useState, useEffect} from "react";
import './TodoList.css';
import SlidingButton from "../resources/SlidingButton";
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus } from "react-icons/ai"
//import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
import Task from "./Task";
import TaskCreator from "./TaskCreator";
function TodoList (props) {

    const [state, setState] = useState({tasks: props.tasks})
    useEffect (() => {
        setState({tasks: props.tasks})
    },[props.tasks])

    return(      
        <div className="list-container">
            <h3 className='heading-list'>world domination</h3>
            <ul className="list">   
                {state.tasks !== 0 &&
                    state.tasks.map((task) => {
                        return(
                            <Task key={task.id} id={task.id} name={task.name} done={task.done} onTaskClick={props.onTaskClick}/>
                        )
                    })
                }          
                <SlidingButton text='new task'  reaction={props.onNewTask}> 
                    <AiOutlinePlus className="list__icon"/>
                </SlidingButton>
            </ul>
        </div>
        )
    }
export default TodoList
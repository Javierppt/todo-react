import React, { useEffect, useState } from "react";
import './TodoList.css';
import SlidingButton from "../resources/SlidingButton";
import { AiOutlinePlus } from "react-icons/ai"
//import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
import Task from "./Task";
function TodoList (props) {
    const [state, setState] = useState({tasks: props.tasks})
    return(      
        <div className="list-container">
            <h3 className='heading-list'>world domination</h3>
                <ul className="list"> 
                    { useEffect(() => setState({tasks: props.tasks}), [props]) }
                    { state.tasks.map((item) => {
                        return(
                            <Task key={item.id} id={item.id} name={item.name} done={item.done} markTask={props.markTask}/>
                        )
                    })}
                    <SlidingButton text='new task' link='#'> <AiOutlinePlus className="list__icon"/></SlidingButton>
                </ul>
        </div>
        )
    }
export default TodoList
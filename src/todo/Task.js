import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
function Task({id, name, done, onTaskClick}) {
    if (!done) 
        return(
            <li className='list__item' key={id} onClick={() => onTaskClick(id)}><MdCheckBoxOutlineBlank className="list__icon"  />{name}</li>
        )
        else
        return (
            <li className='list__item list__item-done' key={id} onClick={() => onTaskClick(id)}><MdCheckBox className="list__icon" />{name}</li>
        )
}

export default Task
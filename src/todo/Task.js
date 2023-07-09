import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
function Task({id, listId, name, done, markTask}) {
    if (!done) 
        return(
            <li className='list__item' onClick={() => markTask(listId, id)}><MdCheckBoxOutlineBlank className="list__icon"/>{name}</li>
        )
        else
        return (
            <li className='list__item list__item-done' onClick={() => markTask(listId, id)}><MdCheckBox className="list__icon"/>{name}</li>
        )
}

export default Task
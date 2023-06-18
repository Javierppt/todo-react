import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"
function Task({id, name, done}) {
    if (!done) 
        return(
            <li className='list__item'><MdCheckBoxOutlineBlank className="list__icon"/>{name}</li>
        )
        else
        return (
            <li className='list__item list__item-done'><MdCheckBox className="list__icon"/>{name}</li>
        )
}

export default Task
import React from 'react'
import './slidingButton.css'
const dialog = document.getElementById('createDialog');

function SlidingButton(props) {
    return (
        <>  
        {/* In the future make it so that it renders prop.children to make it reusable */}
            <a className='button' href={props.link} onClick={props.reaction}><span></span>{props.children}{props.text}</a>
            
        </>
    )
}

export default SlidingButton
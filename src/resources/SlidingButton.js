import React from 'react'
import './slidingButton.css'
function handleCreateTask () {
    openTaskCreator();
    console.log("a")
}
function openTaskCreator() {
    
    const element = document.getElementById('createDialog');
    element.show();

}
function SlidingButton(props) {
    return (
        <>
            <a className='button' href={props.link} onClick={handleCreateTask}><span></span>{props.children}{props.text}</a>
            <dialog id='createDialog'>
                <p>Esto funka</p>
                <form method='dialog'>
                    <button>Ok</button>
                </form>
            </dialog>
        </>
    )
}

export default SlidingButton
import React, { useState } from "react";
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid';
function Dashboard () {
    const [state, setState] = useState(
        {
            list:{
                id : uuidv4(),
                tasks : [
                    { id: uuidv4() ,name : 'Meditate after wake up', done: false},
                    { id: uuidv4() ,name : 'make bed', done: false},
                    { id: uuidv4() ,name : 'brush tooth', done: false},
                    { id: uuidv4() ,name : 'breakfast', done: false},
                    { id: uuidv4() ,name : 'study react', done: false},
                    { id: uuidv4() ,name : 'improve arkanoid', done: false},
                ]
                }
            }
    )
    function markTask(taskId) {
        const newTasks = state.list.tasks.map((task) => {
            if (taskId === task.id) {
                return Object.assign({}, task, {done: !task.done});
            }
            else
                return task;
        })
        setState({
            list: Object.assign({}, state.list, { tasks: newTasks})
        })
        
    }

    return(
        <div>

            <TodoList key={state.list.id} id={state.list.id} tasks={state.list.tasks} markTask={markTask}/>

        </div>
    )
}
export default Dashboard
import TodoList from "./TodoList";
import React, {  useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskCreator from "./TaskCreator";
function Dashboard () {
    const [state, setState] = useState({tasks: [], openedCreator: false})
    useEffect(() => {
        setState({ 
            tasks : [
                { id: uuidv4() ,name : 'Meditate after wake up', done: false},
                { id: uuidv4() ,name : 'make bed', done: false},
                { id: uuidv4() ,name : 'brush tooth', done: false},
                { id: uuidv4() ,name : 'breakfast', done: false},
                { id: uuidv4() ,name : 'study react', done: false},
                { id: uuidv4() ,name : 'improve arkanoid', done: true},
            ],
            openedCreator: false,
    })},
    []);

    function markTask(id) {
        const newTasks = state.tasks.map((task) => {
            if (id === task.id) {
                
                return Object.assign({}, task, task.done===true ?  {done:false} : {done: true});
            }
            else
                return task;
        })
        setState({ tasks: newTasks})
    }

    function handleTaskCreator() {
        setState({
            tasks: state.tasks,
            
            openedCreator: state.openedCreator === true ? false : true})
    }

    return (
        <div>
            <TodoList 
            tasks={state.tasks}
            onNewTask={handleTaskCreator}
            onTaskClick={markTask}
            />
            {state.openedCreator && <TaskCreator/>}
        </div>
    )
}
export default Dashboard
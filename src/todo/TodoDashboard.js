import React, { useState } from "react";
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid';
function Dashboard () {
    const [state, setState] = useState(
        {
            lists:[
                {
                    id : uuidv4(),
                    title: 'World Domination',
                    tasks : [
                        { id: uuidv4() ,name : 'Meditate after wake up', done: false},
                        { id: uuidv4() ,name : 'make bed', done: false},
                        { id: uuidv4() ,name : 'brush tooth', done: false},
                        { id: uuidv4() ,name : 'breakfast', done: false},
                        { id: uuidv4() ,name : 'study react', done: false},
                        { id: uuidv4() ,name : 'improve arkanoid', done: false},
                    ]
                    },
                {
                    id : uuidv4(),
                    title: 'test',
                    tasks : [
                        { id: uuidv4() ,name : 'Test', done: false},
                        
                    ]
                    }
                ]
            }
    )
    function markTask(listId, taskId) {
        const newLists = state.lists.map((list) => {
            if (list.id === listId) {
                const newTasks = list.tasks.map((task) => {
                    if (task.id === taskId) {
                        return Object.assign({}, task, { done: !task.done });
                    }
                    else {
                        return task;
                    }
                });
                return { ...list, tasks: newTasks}
            }
            return list
        })
        setState({
            lists: newLists
        })
    }
    return(
        <div>
            {state.lists.map((list) => {
                return <TodoList key={list.id} title={list.title} id={list.id} tasks={list.tasks} markTask={markTask}/>
            })}
            

        </div>
    )
}
export default Dashboard
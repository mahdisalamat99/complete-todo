import React,{useState} from 'react';
import Todo from './Todo';

function TodoList ({todos,toggleComplete,filterTodo}) {
    console.log(todos)

    return (
        
            <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} mahdiTodo={filterTodo} />
            ))}
            </ul>
        
    )
}

export default TodoList;
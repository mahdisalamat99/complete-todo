import React from 'react';

function Todo ({todo,toggleComplete,mahdiTodo}) {
    function handleCheckBoxClick (){
        toggleComplete(todo.id);
    }

    function handleRemoveClick (){
        mahdiTodo(todo.id)
    }

    return (
     <div style={{display:"flex"}}  >
         <input type="checkbox" onClick={handleCheckBoxClick}  />
         <li
            style={{
                color:"white",
                textDecoration : todo.completed ? "line-through" : null
            }}
         >{todo.task}</li>
         <button onClick={handleRemoveClick} >X</button>
     </div>   
    )
}

export default Todo;
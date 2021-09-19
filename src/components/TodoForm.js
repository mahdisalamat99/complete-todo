import React,{useState} from 'react';

function TodoForm ({addTodo}){
    const [todo,setTodo] = useState(
        {
        id : "",
        task:"",
        completed: false
        })

        function handleChangeInputTask(e){
            setTodo({...todo, task:e.target.value})
        }

        function handleSubmit (e){
            e.preventDefault();
            if(todo.task.trim()){
                addTodo({...todo,id:Math.floor(Math.random()*1000)});

                setTodo({...todo,task:""})
            }
        }
   
    return(
        <div>
            <form onSubmit={handleSubmit}  >
                <input type="text" 
                value={todo.task}
                onChange={handleChangeInputTask} />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;
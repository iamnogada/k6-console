import React, { useState } from "react";

import NewTodoList from "../components/NewTodoList";
import NewTodoInput from "../components/NewTodoInput";



function NewTodoPage() {
  // const [todos, setTodos] = useState([{"text":"Sample Todo 1"},{"text":"Sample todo 2"}]);
  
  // Callback to add a new todo
  // const addTodo = (text) => {
  //   setTodos([...todos, { text }]);
  // };

  // // Callback to delete a todo by index
  // const deleteTodo = (index) => {
  //   const newTodos = todos.filter((_, i) => i !== index);
  //   console.log(newTodos);
  //   setTodos(newTodos);
  // };

  return (
    <div>
      <h1 className="m-2 bg-gray-400">Todo App</h1>
      <div className="m-2">
        <NewTodoInput  />
      </div>
      <div className="divide-y-2 divide-dotted" >
        <NewTodoList  />
      </div>
    </div>
  );
}

export default NewTodoPage;

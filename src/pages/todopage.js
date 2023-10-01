import React, { useState } from "react";

import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

function TodoPage() {
  const [todos, setTodos] = useState([{"text":"Sample Todo 1"},{"text":"Sample todo 2"}]);

  // Callback to add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  // Callback to delete a todo by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className="m-2 bg-gray-400">Todo App</h1>
      <div className="m-2">
        <TodoInput onAddTodo={addTodo} />
      </div>
      <div className="divide-y-2 divide-dotted" >
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default TodoPage;

import React from "react";

import {todoAtom} from "../store/store";
import { useAtom } from "jotai";

function NewTodoList() {
  const [todos, setTodos] = useAtom(todoAtom);
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="ml-2 border border-gray-400 py-2 px-4 divide-y divide-dotted">
      {todos.map((todo, index) => (
        <div key={index} className="flex items-center m-1 pt-1 ">
          <div className="w-4/5 ">
            {todo.text}
          </div>
          <button
            onClick={() => handleDeleteTodo(index)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NewTodoList;

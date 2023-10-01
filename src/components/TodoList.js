import React from "react";

function TodoList({ todos, onDeleteTodo }) {
  return (
    <div className="ml-2 border border-gray-400 py-2 px-4 divide-y divide-dotted">
      {todos.map((todo, index) => (
        <div key={index} className="flex items-center m-1 pt-1 ">
          <div className="w-4/5 ">
            {todo.text}
          </div>
          <button
            onClick={() => onDeleteTodo(index)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

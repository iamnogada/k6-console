import React, { useState } from "react";

import {todoAtom} from "../store/store";
import { useAtom } from "jotai";

function NewTodoInput() {
  const [inputValue, setInputValue] = useState("");
  const [todos,setTodos] = useAtom(todoAtom);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTodo = () => {
    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
      setTodos((todos)=>[...todos, { text: inputValue }]);
      setInputValue("");
    }
  };

  return (
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
          className="w-4/5 border border-gray-400 py-2 px-4 rounded-lg"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-2">
          Add
        </button>
      </div>
  );
}

export default NewTodoInput;

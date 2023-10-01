import React, { useState } from "react";

import NewTodoList from "../components/NewTodoList";
import NewTodoInput from "../components/NewTodoInput";



function NewTodoPage() {

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

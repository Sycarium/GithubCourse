// TodoInput.js hehe
import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
import React from "react";

import Todo from "./ToDo";

const ToDoList = ({ toDos, setToDos }) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
       {toDos.map((toDo) => (
         <Todo 
            setToDos={setToDos} 
            toDos={toDos} 
            toDo={toDo}
            key={toDo.id} 
            text={toDo.text}
          />
       ))} 
      </ul>
    </div>
  );
}

export default ToDoList
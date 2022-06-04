import React, { useState } from "react";
import './App.css';

import Form from './components/Form';
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <header>
        Aakanksha's To Do List
      </header>
      <Form 
        toDos={toDos} 
        setToDos={setToDos} 
        setInputText={setInputText} 
        inputText={inputText} 
      />
      <ToDoList setToDos={setToDos} toDos={toDos}/>
    </div>
  );
}

export default App;

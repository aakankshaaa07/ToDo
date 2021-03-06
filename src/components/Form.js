import React from "react";

const Form = ({ setInputText,setToDos,toDos, inputText }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos, {text: inputText, completed: false, id: Math.random()*1000}
    ]);
    setInputText("");
  };

  return(
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
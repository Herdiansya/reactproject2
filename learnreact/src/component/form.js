import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form action="">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;

import { useState } from "react";

function MessageBoard() {
  const [todoList, setTodoList] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  function handleInputTodo(event) {
    setInputTodo(event.target.value);
  }
  function handleAddTodo(event) {
    const newTodoList = [...todoList];
    newTodoList.push(inputTodo);
    setTodoList(newTodoList);
    event.preventDefault();
  }
  function handleDeleteTodo(todoIndex) {
    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInputTodo}
            value={inputTodo}
            required
          />
        </label>
        <button className="submit-message-button" onClick={handleAddTodo}>
          Submit
        </button>
      </div>
      <div class="board">
        {todoList.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDeleteTodo(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;

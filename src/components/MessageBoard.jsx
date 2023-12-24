import { useState } from "react";

function MessageBoard() {
  const [textList, setTextList] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const headleAddMessage = (event) => {
    event.preventDefault();
    const newMessage = [...textList];
    newMessage.push(messageInput);
    setTextList(newMessage);
  };

  const headleDeleteMessage = (list) => {
    const newMessage = [...textList];
    newMessage.splice(list, 1);
    setTextList(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
            required
          />
        </label>
        <button className="submit-message-button" onClick={headleAddMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {textList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  headleDeleteMessage(index);
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

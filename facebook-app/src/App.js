import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const ValueHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setMessages([...messages, input]);
    console.log(messages);
    setInput("");
  };

  return (
    <div className="App">
     
     <form>
     <h1>Facebook Messenger Clone React and Firebase</h1>
      <input value={input} onChange={ValueHandler}></input>
      <button text="Submit" type="submit" onClick={onSubmitHandler}>
        send message
      </button>
     </form>

    
        {messages.map((message,idx) => (
          <p key={idx}>{message}</p>
        ))}
      
    </div>
  );
}

export default App;

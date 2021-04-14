import "./App.css";
import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const ValueHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    console.log(messages);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <h1>Facebook Messenger Clone React and Firebase</h1>
        <FormControl>
          <InputLabel htmlFor="my-input">message</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={input}
            onChange={ValueHandler}
          />
          <Button
            type="submit"
            onClick={onSubmitHandler}
            variant="contained"
            color="primary"
            text="send message"
            disabled={!input}
          >
            
          </Button>
        </FormControl>
        {/* <input value={input} onChange={ValueHandler}></input> */}
        {/* <Button text="Submit" type="submit" onClick={onSubmitHandler}>
        
      </Button> */}
      </form>

      {messages.map((message, idx) => (
        <p key={idx}>{message}</p>
      ))}
    </div>
  );
}

export default App;

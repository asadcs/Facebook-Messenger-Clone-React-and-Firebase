import "./App.css";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     {username:'Asad' , message:'Hello'},
//     {username:'Asadq' , message:'Hello3'},
//     {username:'Asad3' , message:'Hello4'}
// ]);

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('')

useEffect(() => {
  setUsername(prompt('Enter yout name'))
 
}, [])


useEffect(() => {
  db.collection('messages').onSnapshot(snapshot=>{
    snapshot.docs.map(doc=>console.log(doc.data()))
    setMessages(snapshot.docs.map(doc=>doc.data()))
  })
}, [])

  const ValueHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, {username:username , text:input} ]);
    console.log(messages);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <h1>Facebook Messenger Clone React and Firebase</h1>
        <h2>Welcome {username}</h2>
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
            send message
          </Button>
        </FormControl>
        {/* <input value={input} onChange={ValueHandler}></input> */}
        {/* <Button text="Submit" type="submit" onClick={onSubmitHandler}>
        
      </Button> */}
      </form>

      {messages.map((message, idx) => (
        // <p </p>
        <Message key={idx} message={message} username={username}>
        </Message>
      ))}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
//import GithubCorner from "react-github-corner";
//import DateFormat from "dateformat";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  // useState = variable in REACT
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  // useEffect = run code on a condition
  useEffect(() => {
    let username = prompt("Please enter your name");
    console.log(username);
    if (username === "") username = "Unknown";
    setUsername(username);
    // if its blank inside [], this code runs ONCE when the app components load
    // if we have a variable like input, it will be firing at every change
  }, []); // condition

  const sendMessage = (event) => {
    // all the logic to send the message
    event.preventDefault(); // prevent form to refresh the page

    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // append Message input to messages array
    /*setMessages([
      ...messages,
      {
        username: username,
        message: input,
      },
    ]);*/

    setTimeout(() => {
      const chat = document.querySelector("#chat");
      chat.scroll({ behavior: "smooth" });
      chat.scrollTop = chat.scrollHeight;
    }, 500);

    setInput("");
  };

  // const githubCornerUrl =
  //   "https://github.com/leopaul29/facebook-messenger-clone";
    const githubCornerUrl =
    "https://github.com/asadcs/Facebook-Messenger-Clone-React-and-Firebase";


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80" />


      {/* <GithubCorner
        href={githubCornerUrl}
        bannerColor="#70B7FD"
        octoColor="#fff"
        size={80}
        direction="right"
        target="_blank"
        rel="noopener noreferrer"
      /> */}
      <div className="container">
        <div className="header">
          {/* <img
            className="header__logo"
            src="https://cdn.freebiesupply.com/logos/large/2x/facebook-messenger-logo-png-transparent.png"
            alt="messenger logo"
          /> */}
          <h1 className="header__title">Messenger App</h1>
          <h2 className="header__subtitle">Welcome {username}</h2>
        </div>

        <div id="chat" className="messageList">
          <FlipMove>
            {messages.map(({ id, message }) => {
              return <Message key={id} username={username} message={message} />;
            })}
          </FlipMove>{" "}
        </div>
        <div className="footer">
          {/* form and button type submit allow the enter to send the message */}
          <form className="app__form">
            <FormControl className="app__formControl">
              {/* set the input value of the state */}
              <Input
                className="app__input"
                placeholder="Enter a message..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />

              <IconButton
                className="app__iconButton"
                disabled={!input}
                variant="contained"
                color="primary"
                type="submit"
                onClick={sendMessage}
              >
                <SendIcon />
              </IconButton>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
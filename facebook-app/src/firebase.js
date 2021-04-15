// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB5UIJQFsTB6NPcLoit4nGE68xGDa1ENPM",
//     authDomain: "todo-app-with-react-fire-3fb03.firebaseapp.com",
//     projectId: "todo-app-with-react-fire-3fb03",
//     storageBucket: "todo-app-with-react-fire-3fb03.appspot.com",
//     messagingSenderId: "793161110487",
//     appId: "1:793161110487:web:aeea0b868ac275732cb192",
//     measurementId: "G-3PHJM8J4WN"
//   };
  
import firebase from "firebase"

const  firebaseApp = firebase.initializeApp({
     

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDw3lfdxEKJLEtRYuzSZDf77eL6FdbvI4k",
    authDomain: "facebook-messenger-app-6906e.firebaseapp.com",
    projectId: "facebook-messenger-app-6906e",
    storageBucket: "facebook-messenger-app-6906e.appspot.com",
    messagingSenderId: "231669674641",
    appId: "1:231669674641:web:bf2756d783492c16a0c530",
    measurementId: "G-HN7HCKRT2Q"

  

})

const db= firebaseApp.firestore();
//const auth=firebase.auth();

export default db;
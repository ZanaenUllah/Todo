import firebase from "firebase";
import "@Firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEfTPZyiRwL15fLoNQyd_F2wAm0iaZTUk",
  authDomain: "todoapp-64c5c.firebaseapp.com",
  projectId: "todoapp-64c5c",
  storageBucket: "todoapp-64c5c.appspot.com",
  messagingSenderId: "494768321730",
  appId: "1:494768321730:web:ca288ebdbbffdde3c1375b",
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }
}

export default Fire;

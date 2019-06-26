import React from 'react';
import './App.css';
import AuthBar from './components/AuthBar'



//document.addEventListener("DOMContentLoaded", event => {const app = firebase.app()})

//firebase.initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">
 		<AuthBar />
    </div>
  );
}

export default App;

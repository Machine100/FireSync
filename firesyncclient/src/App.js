import React from 'react';
import './App.css';
import AuthBar from './components/AuthBar'
import StyledForm from './components/StyledForm'


//document.addEventListener("DOMContentLoaded", event => {const app = firebase.app()})

//firebase.initializeApp(firebaseConfig);

//


function App() {
  return (
    <div className="App">
 		<AuthBar />
 		<StyledForm />
    </div>
  );

}

export default App;

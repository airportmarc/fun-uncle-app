import React from 'react';
import './App.css';
import {MainNavigation} from "./Components/Nav";
import {ButtonBody} from "./Components/ButtonBody";

function App() {
  return (
    <div className="App min-h-screen px-5 ">
      <MainNavigation/>
      <h1 className="pt-24">Welcome, Its Friday afternoon, what are you in the mood for?</h1>
      <ButtonBody/>
    </div>
  );
}

export default App;

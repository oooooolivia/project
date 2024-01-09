import './App.css';
import FirstComponent from "./FirstComponent"
import Toggle from "./Toggle"
import { useEffect, useState } from 'react'
import './style.css'


function App() {
  return (
    <div className="App">
      <h1> Welcome</h1>
      <FirstComponent />
      <Toggle />
    </div>
  );
}

export default App;

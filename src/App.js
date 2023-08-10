import { useState } from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState({ms:0,sec:0,min:0,hrs:0});
  function update(){
    
  }
  return (
    <div className="main-container">
      <div className="timer-container">
        <span>{(time.ms>=10)?(time.ms):"0"+(time.ms)}</span>
        <span>{(time.sec>=10)?(time.sec):"0"+(time.sec)}</span>
        <span>{(time.min>=10)?(time.min):"0"+(time.min)}</span>
        <span>{(time.hrs>=10)?(time.hrs):"0"+(time.hrs)}</span>
        
        <button onClick={update}>START</button>s
      </div>
    </div>
  );
}

export default App;

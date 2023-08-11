import { useState } from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState({ms:0,sec:0,min:0,hrs:0});

  function update(){
    run();
    setInterval(run,10);  
  };
  function stop(){
  // setTime({ms:0,sec:0,min:0,hrs:0});
  };

  let updatedms=time.ms;let updatedsec=time.sec;let updatedmin=time.min;let updatedhrs=time.hrs;
  function run(){
    if(updatedmin===60)
    {
      updatedhrs++;
      updatedmin=0;
    }
    if(updatedsec===60){
      updatedmin++;
      updatedsec=0;
    }
    if(updatedms===100){
      updatedsec++;
      updatedms=0;
    }
    updatedms++;
    return setTime({ms:updatedms,sec:updatedsec,min:updatedmin,hrs:updatedhrs});


  }
  return (
    <div className="main-container">
      <div className="timer-container">
        <div className="timer">
        <span className="time">{(time.hrs>=10)?(time.hrs):"0"+(time.hrs)}</span>
        <span className="time">{(time.min>=10)?(time.min):"0"+(time.min)}</span>
        <span className="time">{(time.sec>=10)?(time.sec):"0"+(time.sec)}</span>
        <span className="time">{(time.ms>=10)?(time.ms):"0"+(time.ms)}</span>
        
        </div>
        <div className="btn">
        <button onClick={update}>START</button>
        <button onClick={stop}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;

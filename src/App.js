import React, { useState, useEffect } from 'react'
import './App.css';


function App() {

  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  useEffect(()=>{
    setHours(24)
    setMinutes(0)
    setSeconds(0)
    let pipoca = new Date('may 30 , 2022 00.00.00').getTime()
    console.log(pipoca)
  },[])
  
  useEffect(() => {
    setTimeout(() => {
      if (seconds > 0) {
        setSeconds(state => state - 1)
      }
      else if (seconds === 0 && minutes !== 0 ) {
        setSeconds(59)
        setMinutes(state => state - 1) 
      }
      else if (minutes === 0 && hours !== 0) {
         setMinutes(59)
         setSeconds(59)
         setHours(state => state - 1)
      }
      else if(hours === 0){
        setHours(24)
        setMinutes(0)
        setSeconds(0)
      }
    }, 1000)

  }, [seconds])



  return (
    <div className="App">
      <header className="App-header">
        <span>{String(hours).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(minutes).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, "0")}</span>
      </header>
    </div>
  );
}

export default App;

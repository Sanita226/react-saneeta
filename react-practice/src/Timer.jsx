import { useState, useEffect } from "react"


function Timer() {
const [seconds, setSeconds] = useState(0);

const [isRunning, setIsRunning] = useState(true);



useEffect(() => {
  if (!isRunning) {
    return;
  }

  const timer = setInterval(() => {
    setSeconds((previousSeconds) => previousSeconds + 1);
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, [isRunning]);



return (
    <>
    <h2>Timer: {seconds}</h2>
    

    <button onClick={() => setIsRunning(false)}
        disabled={!isRunning}
        >Pause</button>

    <button onClick={() => setIsRunning(true)}
        disabled={isRunning}>Resume</button>

    <button onClick={() => setSeconds(0)}>Reset</button>

    </>
);
}

export default Timer;




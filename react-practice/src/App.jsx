import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Increase</button>
    <button onClick={handleReset}>Reset</button>

    </div>

  );
}




export default App;
import { useState } from "react";


function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClear() {
    setName("");
  }

  return (
    <div>
      <h1>Enter your name</h1>
      <input type="text" 
      value={name}
      onChange={handleChange}
      
      />
      <button onClick={handleClear}> Clear Name</button>
      <h1>{name}</h1>
      
    </div>
  );
}

export default App;
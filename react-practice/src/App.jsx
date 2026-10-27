import { useState } from "react";



function App() {

  const [name, setName] = useState("");


  const [submittedName, setSubmittedName] = useState("");


  function handleSubmit(event) {

    event.preventDefault();
    if(name.trim() !== ""){
    setSubmittedName(name.trim());
    }
    else{
      setSubmittedName("");
    }
  }

    function handleClear() {
      setName("");
      setSubmittedName("");
    }
  return (
    <>
    <h1>My First Form</h1>
    <form onSubmit={handleSubmit}>
      <input 
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Enter your name"
      />
      <button type="submit">Submit</button>

      <button type="button" onClick={handleClear}>clear</button>

      {submittedName && <p>Hello, {submittedName}!</p>}
    </form>
    </>
  );
}

export default App;
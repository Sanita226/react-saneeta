import { useState } from "react";



function App() {

  const [name, setName] = useState("");


  const [submittedName, setSubmittedName] = useState("");


  const [error, setError] = useState("");


  function handleSubmit(event) {

    event.preventDefault();
    if(name.trim().length < 3){
      setError("Name must be at least 3 characters.");
    setSubmittedName("");
    }
    else{
      setError("");
      setSubmittedName(name.trim());
    }
  }

    function handleClear() {
      setName("");
      setSubmittedName("");
      setError("");
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

      {error && <p>{error}</p> }
    </form>
    </>
  );
}

export default App;

import { useState } from "react"

function App() {
  const [fruits, setFruits] = useState(["Apple", "Mango","Litchi"]);

  const [newFruit, setNewFruit] = useState("");

  function handleAddFruit() {
    if(newFruit.trim() !=="") {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  }

  function handleRemoveFruit(fruitRemove) {
    setFruits(
      fruits.filter((fruit) =>
        fruit !== fruitRemove
      )
    );
    
  }

  return (
    <>
    <h1>My Fruits</h1>

    <input
    value={newFruit}
    onChange={(event) => setNewFruit(event.target.value)}
    placeholder="Enter a fruit..." 
    />
    <button onClick={handleAddFruit}>Add Fruit</button>
   
   

    {fruits.map((fruit) => (
      <div key={fruit}>
        <p>{fruit}</p>
        <button onClick={() => handleRemoveFruit(fruit)}>Remove</button>
      </div>
    ))}
    </>
  );
}
export default App;
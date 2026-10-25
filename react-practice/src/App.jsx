
import { useState } from "react"


function App(){
   const products = ["Mouse", "Keyboard", "Monitor"];

   const [searchText, setSearchText] = useState("");


   const filteredProducts = products.filter((product) =>
  product.toLowerCase().includes(searchText.toLowerCase())
);

   return (
    <>
    <h1>My products</h1>
    <input 
    type="text"
    placeholder="Search products..."
    value={searchText}
    onChange={(event) => setSearchText(event.target.value)}
    />
    {filteredProducts.map((product) => (
      <p key={product}>{product}</p>
    ))}
    
    </>
   );
}
export default App;
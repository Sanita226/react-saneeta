
function App() {
  let products = [
    {id: 1, name: "Monitor", price: 100},
    {id: 2, name: "Keyboard", price: 1000}
  ];


  return (

    <div>
      {products.filter((product) =>product.price> 500)
      .map((product) =>(
        <p key={product.id}>{product.name}- Rs.{product.price}</p>
      ))}

    </div>
  );
}
 export default App;
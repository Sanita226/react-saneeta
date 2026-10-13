
function Students(props) {
  return <h2>{props.name},age {props.age}</h2>
}

function App() {
  return(
    <div>
    <Students name="sanita" age={22} />
    <Students name="Karina" age={21} />


    </div>
  );
}


export default App;
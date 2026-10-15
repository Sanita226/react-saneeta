
function App() {
  const skills = ["HTML", "CSS", "React", "Javascript"];

  return (
    <div>
      <h1>My Skills</h1>

      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
  

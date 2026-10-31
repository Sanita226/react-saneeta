import { useState, useEffect } from "react"
import Timer from "./Timer";



function Header() {
  return <h1>My Learning Website</h1>;
}

function Course({name, duration ,onRemove}) {
  return (
    <>
    <h2>{name}</h2>
    <p>Duration: {duration} days</p>
    <button onClick={() => onRemove(name)}>Remove</button>
    </>
  );
}

function CourseList({title,courses, onRemoveCourse}) {
  return(
    <>
    <h2>{title}</h2>
    {courses.map((course) =>(
        
      <Course
      key={course.name}
      name={course.name}
      duration={course.duration}
      onRemove={onRemoveCourse}
      />
    ))}
    
    
    </>
  );

}




function App() {

  useEffect(() => {
    document.title = "My Courses";
  }, []);

  const [courses, setCourses ] = useState([
     { name: "React", duration: 30 },
  { name: "JavaScript", duration: 45 },
  { name: "HTML", duration: 15 },

  ]);

  function handleAddCourses() {
    setCourses([...courses, { name: "Node.js", duration: 20 }]);

  }

  function handleRemoveCourse(courseName) {
    const updatedCourses = courses.filter((course) => course.name !== courseName );
    setCourses(updatedCourses);

  }

  
  


  return (
    <>
    <Header />

    <button onClick={handleAddCourses}>Add Course</button>
    <CourseList title="My React Courses"
    courses={courses} 
    onRemoveCourse={handleRemoveCourse}
    />
    {/* <button onClick={handleRemoveCourse}>Remove</button> */}

    <Timer />
   
   
    </>
  );
}

export default App;
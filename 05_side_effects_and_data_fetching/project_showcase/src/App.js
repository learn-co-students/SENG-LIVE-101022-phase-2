import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  // useEffect Always Accepts Two Arguments
    // 1st => Callback Function (Effect)
    // 2nd => Dependency Array (Optional / Constrains Our useEffect Behaviors)

  // Outside of useEffect - No Way to Constrain
  // fetch("http://localhost:4000/projects")
  //   .then((res) => res.json())
  //   .then((projects) => setProjects(projects));

  // console.log("App Component Rendered");

  // Implement useEffect Hook
  useEffect(() => {
    
    // console.log("test");

    // Not Necessary to Clean Up Behavior
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));

    // Clean Up Function (Optional) - No Need Here
    // return () => {

    // }
  }, []);

  // Function to Mount / UnMount Our Timer Component
  const toggleTimer = () => setIsTimerVisible(!isTimerVisible);

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      { isTimerVisible ? <Timer /> : null }
      <button onClick={toggleTimer}>{ isTimerVisible ? "Hide Timer" : "Show Timer"}</button>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;

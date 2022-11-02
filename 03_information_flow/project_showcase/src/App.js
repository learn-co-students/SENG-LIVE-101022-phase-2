import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
// import Intermediary from "./components/Intermediary";

const App = () => {
  const [projects, setProjects] = useState([]);

  // Lifted State Up from ProjectList Component - What We're Changing
  const [searchQuery, setSearchQuery] = useState("");
  
  // Lifted State Up from Header Component - What We're Changing
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Lifted Callback Function Up From Header Component - How We're Changing It
  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Filtering Logic for Live Search Feature
  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Callback Function for onChange Event in Live Search Bar
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    // "App" vs. "App light"
    <div className={ isDarkMode ? "App" : "App light" }>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList handleOnChange={handleOnChange} searchResults={searchResults} />
    </div>
  );
};

export default App;

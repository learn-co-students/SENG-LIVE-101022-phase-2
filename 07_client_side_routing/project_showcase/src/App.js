import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Switch>
        
        {/* / => Root URL */}
        {/* Static URL */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* /projects/new */}
        {/* Static URL */}
        <Route path="/projects/new">
          <ProjectForm onAddProject={onAddProject} />
        </Route>
        
        {/* /projects/:id/edit */}
        {/* Dynamic URL => Uses the :id Symbol */}
        <Route path="/projects/:id/edit">
          <ProjectEditForm 
            projectId={projectId}
            completeEditing={completeEditing}
            onUpdateProject={onUpdateProject} 
          />
        </Route>
        
        {/* /projects/:id */}
        {/* Dynamic URL => Uses the :id Symbol */}
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        
        {/* /projects */}
        <Route path="/projects">
          <ProjectList
            projects={projects}
            onDeleteProject={onDeleteProject}
            enterProjectEditModeFor={enterProjectEditModeFor}
          />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

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
    setProjects([...projects, newProj]);
  };

  // Should Be Responsible For State Change (projects)
  const onUpdateProject = (updatedProject) => {
    // Map Through Our Existing Array of projects
      // Find The Project That We Want to Update

    // Creating a New (Updated) List of Projects
    const updatedProjects = projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    });

    // Making a State Change (projects)
      // Causes Our Root App Component to Rerender
    setProjects(updatedProjects);
  }

  // Should Be Responsible For State Change (projects)
  const onDeleteProject = (deletedProject) => {
    const updatedProjects = projects.filter(project => {
      return project.id !== deletedProject.id;
    });

    // Making a State Change (projects)
      // Causes Our Root App Component to Rerender
    setProjects(updatedProjects);
  }

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    
    // Making a State Change From the Level of ProjectListItem
    // Inverse Data Flow
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;

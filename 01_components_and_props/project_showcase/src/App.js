// - Return the `Header`, `ProjectForm` and `ProjectList` components

// Import One "Thing" (Component) => Named Import Not Necessary
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm"; 
import ProjectList from "./components/ProjectList";

// Import Projects Data
// Why Are We Importing Here? => 
  // Top Level Location to Persist Our Data From
import projects from "./projects";

// - Provide the array of `projects` to `ProjectList` as props

const App = () => {
  // console.log(projects);
  
  return (
    // Parent Level Container Necessary
      // Fragment => <></>
      // Regular JSX Element => <div>
    <>
      {/* <div className="App">Project Showcase</div> */}
      <Header firstName="Louis" lastName="Medina"/>
      <ProjectForm />
      <ProjectList projects={projects}/>
      {/* <SomeOtherComponent projects={projects}/> */}
    </>
  );
}

export default App;

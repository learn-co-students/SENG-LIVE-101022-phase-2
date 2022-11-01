import ProjectListItem from "./ProjectListItem";

import { useState } from "react";

const ProjectList = ({ projects }) => {

  // Create State / Setter Function
  const [ searchQuery, searchQuerySetter ] = useState("");

  // Create Helper Function to Filter Out Projects By Name
  const handleSearchQuery = e => {
    // console.log(e.target.value);
    
    searchQuerySetter(e.target.value);
  }

  const filteredProjects = projects.filter(project => {
    // For each project, check whether project.name includes searchQuery 
    
    // What do we need to do with project.name / searchQuery to cleanly compare them?

    // My Book => my book
    // Great Outdoors Guide => great outdoors guide

    // .toLowerCase()
    // .includes

    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });


  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem 
      key={project.id} 
      
      {...project} 
      
      // {...project} => Less Work Than...
      // id={project.id}
      // name={project.name}
      // about={project.about}
      // ...
    />
  ));


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearchQuery} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;

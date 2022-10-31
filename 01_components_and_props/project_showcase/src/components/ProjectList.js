// - Accept the props (projects) provided to the component

// - Destructure `projects` from the props object

// - Map over the `projects` array to render the `ProjectListItem` component for each element:

//   - Provide a key prop set to the `project id` value

//   - Provide each `project` object as a prop named `project`

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    // console.log(projects);
        // projects => Array of Project Objects

    // If Value for Key Was An Array...
        // Build Out Helper Function to Hone in One Value

    const ProjectListItems = projects.map((project) => {
        return <ProjectListItem key={project.id} project={project} />
    });

    console.log(ProjectListItems);
    
    return (
        // ProjectList => Container for ProjectListItem Components
        <ul>{ProjectListItems}</ul>
    );
}

export default ProjectList;
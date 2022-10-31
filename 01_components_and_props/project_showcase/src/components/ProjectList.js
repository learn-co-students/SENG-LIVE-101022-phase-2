// - Accept the props provided to the component

// - Destructure `projects` from the props object

// - Map over the `projects` array to render the `ProjectListItem` component for each element:

//   - Provide a key prop set to the `project id` value

//   - Provide each `project` object as a prop named `project`

const ProjectList = () => {
    return (
        <h1>ProjectList Component</h1>
    );
}

export default ProjectList;
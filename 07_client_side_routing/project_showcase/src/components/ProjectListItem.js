import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, enterProjectEditModeFor, onDeleteProject }) => {
  const { id, image, about, name, link, phase, claps } = project;

  const [clapCount, setClapCount] = useState(claps);

  const handleClap = () => { 
    
    // Just a reference to "clapCount", not directly mutating state
    const updatedCount = clapCount + 1;

    // This would be directly mutating state
    // clapCount = clapCount + 1;

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ claps: updatedCount })
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
    .then((resp) => resp.json())
    .then(() => {

      // State Change
      setClapCount(clapCount + 1);
    });
  };

  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };

  const handleDeleteClick = () => {
    const configObj = {
      method: "DELETE"
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
    .then(() => { 
      
      // Callback Function Passed From Our Root App Component
        // Intended To Make a State Change (projects)
      onDeleteProject(project);
    });
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
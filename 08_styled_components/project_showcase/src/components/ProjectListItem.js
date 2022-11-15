import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./shared";

const ProjectListItem = ({ project, enterProjectEditModeFor, onDeleteProject }) => {
  
  const { id, image, about, name, link, phase, claps } = project;

  const [clapCount, setClapCount] = useState(claps);

  // useParams()

  const handleClap = () => { 
    
    const updatedCount = clapCount + 1;

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
        <Button onClick={handleClap} className="claps">
          👏{clapCount}
        </Button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a target="_blank" rel="noreferrer" href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <Button onClick={handleEditClick}>
            <Link to={`projects/${id}/edit`}>
              <FaPencilAlt />
            </Link>
          </Button>
          <Button onClick={handleDeleteClick}>
            <FaTrash />
          </Button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
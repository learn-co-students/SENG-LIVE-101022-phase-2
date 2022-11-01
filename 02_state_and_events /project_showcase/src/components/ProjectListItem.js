import { useState } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  
  // const { about, image, link, name, phase } = project;
  
  // Create State / Setter Function to Manage Clap count
  const [ clapCount, setClapCounts ] = useState(0);

  // Mutating State
    // We generally want to AVOID directly mutating state.

  const handleClaps = () => {
    
    // Mutating State 
    // setClapCounts(clapCount + 1);

    // Not Mutating State
    setClapCounts(prevCount => prevCount + 1);
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClaps} className="claps">👏{clapCount}</button>
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
      </footer>
    </li>
  );
};

export default ProjectListItem;

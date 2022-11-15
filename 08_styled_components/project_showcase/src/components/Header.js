import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
        {/* Link */}
        <Link to="/" style={{ borderBottom: "none" }}>
          <h1 className="branding">
            <span className="logo">{"//"}</span>
            Project Showcase
          </h1>
        </Link>
        <div className="navigation">
          
          {/* NavLinks => Add "Active" Highlighting to Links*/}
          <NavLink className="button" exact to="/projects">
            All Projects
          </NavLink>
          
          {/* NavLinks => Add "Active" Highlighting to Links*/}
          <NavLink className="button" exact to="/projects/new">
            Add Project
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
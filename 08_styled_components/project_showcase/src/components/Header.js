import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./shared";

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
          <Button as={NavLink} exact to="/projects">
            All Projects
          </Button>
          
          {/* NavLinks => Add "Active" Highlighting to Links*/}
          <Button as={NavLink} exact to="/projects/new">
            Add Project
          </Button>
          <Button onClick={onToggleDarkMode}>{buttonTextContent}</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
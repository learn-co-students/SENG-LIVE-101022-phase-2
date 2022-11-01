import { useState } from "react";

const Header = () => {
  // Create State / State Setter Function to Handle Mode 

  // const [ x, y ] = [ 1, 2 ];
  // x => 1
  // y => 2

  const [ isDarkMode, setIsDarkMode ] = useState(false);

  // console.log(useState(false));
    // [false, setterFunction];

  // console.log(useState(true));
    // [true, setterFunction];
  
  const handleClick = () => {
    // console.log("Button Clicked!");
    setIsDarkMode(!isDarkMode);
  }
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Dark Mode" : "Light Mode" }</button>
    </header>
  );
}

export default Header;

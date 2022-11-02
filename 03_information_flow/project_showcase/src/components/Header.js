const Header = ({ isDarkMode, onToggleDarkMode}) => {
  
  // Lift isDarkMode to Root App Component / Pass as Prop
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // Create Similar Callback Function in Root App Component / Pass as Prop
  // const handleClick = () => setIsDarkMode(!isDarkMode);

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;

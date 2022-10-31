// - Render the text `Header`

// props => Immutable (Unchaneable) Values Passed to Component 

const Header = ({ firstName, lastName}) => {
    // console.log(props);
    
    return (
        <h1>Hello, {firstName} {lastName}!</h1>
    )
}

export default Header;
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
  <header>
  <h1 className="title">Veronica's e-Book Library</h1>
  <div className="navbar">
  <Link to="/"> Home</Link>

  <Link to="/about">About</Link> 
  
  <Link to="/bookcase" className="bookLink">Bookcase</Link>
  </div>
  </header>
  ); 
}

export default Header;
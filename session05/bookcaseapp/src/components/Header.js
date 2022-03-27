import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
  <header>
  <h1 class="title">Veronica's e-Book Library</h1>
  <div class="navbar">
  <Link to="/"> Home</Link>

  <Link to="/about">About</Link> 
  
  <Link to="/bookcase" className="bookLink">Bookcase</Link>
  </div>
  </header>
  ); 
}

export default Header;
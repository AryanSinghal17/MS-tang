import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo nav-contact'>MS-tang</div>
      <ul className='nav-menu'>
        <li className='nav-contact'><Link to="/" style={{color: "Black", textDecoration: "none"}}>Home</Link></li>
        <li className='nav-contact' ><Link to="/explore" style={{color: "Black", textDecoration: "none"}}>Explore</Link></li>
        <li className='nav-contact'><Link to="/contact" style={{color: "black", textDecoration: "none"}}>Contact Us</Link></li>
        <li className='nav-contact'><Link to="/about" style={{color: "Black", textDecoration: "none"}}>About Me</Link></li> 
      </ul>
    </div>
  );
};

export default NavBar;

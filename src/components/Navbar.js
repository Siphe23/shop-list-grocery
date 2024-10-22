import { Link } from 'react-router-dom';
import { FaHome, FaList, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa'; // Import icons
import '../assets/Navbar.css'; // Import your CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaShoppingCart size={30} /> {/* Use any icon as a logo */}
        <span>Your Shop</span> {/* Add a title or name next to the logo */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/lists">
            <FaList /> Shopping Lists
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus /> Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

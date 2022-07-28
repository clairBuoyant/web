import { BrowserRouter, NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <BrowserRouter>
        <nav className="nav">
          <p className="nav-title">
            <NavLink to="/">clairBuoyant</NavLink>
          </p>
          <ul className="nav-items">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/">User</NavLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
};

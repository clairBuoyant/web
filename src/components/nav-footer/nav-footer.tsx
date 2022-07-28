import { useRef } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './nav-footer.css';

export const NavFooter: React.FC = () => {
  const navbarLinks = useRef(null);
  console.log('how does this look', navbarLinks);

  //   const handleNavBar = (e) => {
  //     navbarLinks.current.classList.toggle('menu-collapse');
  //   };

  //   const hideNav = () => {
  //     if (!navbarLinks.current.classList.contains('menu-collapse'))
  //       navbarLinks.current.classList.add('menu-collapse');
  //   };

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

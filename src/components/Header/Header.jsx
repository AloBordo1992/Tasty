import { NavLink } from 'react-router-dom';
import Logo from './../Logo/Logo';

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
          <NavLink to="/">
            tasty<span>treats.</span>
          </NavLink>
          <button>*</button>
        </nav>
        <button>*</button>
      </div>
    </header>
  );
};

export default Header;

import { Link as RouterLink } from "react-router-dom";
import { blurOnMouseUp } from "../../utils/focus";
import { navLinks } from "./navData";
import NavIcons from "./NavIcons";
import "./NavBar.css";

const NavBar = ({ handleNavClick, hashKey, isMatch }) => {
  return (
    <nav className="navbar__nav">
      <div className="navbar__nav-list">
        {navLinks.map(({ label, pathname, hash }) => (
          <RouterLink
            className="navbar__nav-link"
            aria-current={isMatch(pathname, hash) ? "page" : undefined}
            onClick={handleNavClick}
            key={label}
            to={{ pathname, hash, state: hashKey }}
            onMouseUp={blurOnMouseUp}
          >
            {label}
          </RouterLink>
        ))}
      </div>
      <NavIcons />
    </nav>
  );
};

export default NavBar;

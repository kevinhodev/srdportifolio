import { socialLinks } from "./navData";
import { blurOnMouseUp } from "../../utils/focus";
import Icon from "../Icon";
import "./NavIcons.css";

const NavIcons = () => (
  <div className="navbar__nav-icons">
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        className="navbar__nav-icon-link"
        aria-label={label}
        href={url}
        onMouseUp={blurOnMouseUp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="navbar__nav-icon" icon={icon} />
      </a>
    ))}
  </div>
);

export default NavIcons;

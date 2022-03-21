import classNames from "classnames";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as ArrowRigth } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Send } from "../../assets/icons/send.svg";

import "./index.css";

const icons = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  menu: Menu,
  close: Close,
  arrowRight: ArrowRigth,
  send: Send,
};

const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent
      aria-hidden
      className={classNames("icon", className)}
      {...rest}
    />
  );
};

export default Icon;

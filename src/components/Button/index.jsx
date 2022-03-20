import classNames from "classnames";
import { Link } from "react-router-dom";
import { blurOnMouseUp } from "../../utils/focus";
import Icon from "../Icon";
import "./index.css";

const Button = ({
  className,
  as,
  iconEnd,
  iconHoverShift,
  iconOnly,
  children,
  href,
  ...rest
}) => {
  const isExternalLink = href?.includes("://");
  const useLinkTag = isExternalLink || href?.[0] === "#";
  const linkComponent = useLinkTag ? "a" : Link;
  const defaultComponent = href ? linkComponent : "button";
  const Component = as || defaultComponent;

  return (
    <Component
      className={classNames("button", className, {
        "button--icon-only": iconOnly,
      })}
      href={href && isExternalLink ? href : undefined}
      to={href && !isExternalLink ? href : undefined}
      onMouseUp={blurOnMouseUp}
      {...rest}
    >
      {!!children && <span className="button__text">{children}</span>}
      {!!iconEnd && (
        <Icon
          className={classNames("button__icon", {
            "button__icon--end": !iconOnly,
            "button__icon--shift": iconHoverShift,
          })}
          icon={iconEnd}
        />
      )}
    </Component>
  );
};

export default Button;

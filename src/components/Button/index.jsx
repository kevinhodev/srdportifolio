import classNames from "classnames";
import { blurOnMouseUp } from "../../utils/focus";
import "./index.css";

const Button = ({
  className,
  as: Component = "button",
  iconOnly,
  children,
  ...rest
}) => {
  return (
    <Component
      className={classNames("button", className, {
        "button--icon-only": iconOnly,
      })}
      onMouseUp={blurOnMouseUp}
      {...rest}
    >
      {!!children && <span className="button__text">{children}</span>}
    </Component>
  );
};

export default Button;

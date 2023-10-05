import classNames from "classnames";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";

export const Button = ({
  type = "primary",
  id,
  title,
  onClick,
  disabled,
  className,
}) => {
  const { theme } = useContext(ThemeContext);
  console.log({ theme });

  return (
    <button
      className={classNames(styles[type], {
        [styles.disabled]: disabled,
        [styles.dark]: theme,
        className
      })}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

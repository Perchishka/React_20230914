import classNames from "classnames";
import styles from "./styles.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";

export const Button = ({ type = "primary", id, title, onClick, disabled, className }) => {
  const  theme  = useContext(ThemeContext);
  const buttonTheme = theme? "dark": "";
  return (
    <button
      className={classNames(styles[type], {
        [styles.disabled]: disabled,
        [styles.dark]: theme
      })}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ type = "primary", id, title, onClick, disabled, className }) => {
  return (
    <button
      className={classNames(styles[type], {[styles.disabled]: disabled})}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

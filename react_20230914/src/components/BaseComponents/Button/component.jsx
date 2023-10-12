import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../../../hooks/use-theme-context";

export const Button = ({
  type = "primary",
  onClick,
  disabled,
  className,
  children,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(styles[type], {
        [styles.disabled]: disabled,
        [styles.dark]: theme === "dark",
        className,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

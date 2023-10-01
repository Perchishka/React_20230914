import classNames from "classnames";
import styles from "./styles.module.css";

export const Link = ({ link,  className }) => {
  return (
    <a className={classNames(styles.link, className)} href={link.path}>
      {link.name}
    </a>
  );
};

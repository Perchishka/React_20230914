import Styles from "./styles.module.css";
import classNames from "classnames";

export const FooterLink = ({ link, className }) => {
  return (
    <a className={classNames(Styles.footer, className)} href={link.link}>
      {link.name}
    </a>
  );
};

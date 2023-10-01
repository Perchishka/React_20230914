import Styles from "./styles.module.css"

export const FooterLink = ({ link }) => {
  return (
    <a className ={Styles.footer_link} href={link.link}>
      {link.name}
    </a>
  );
};

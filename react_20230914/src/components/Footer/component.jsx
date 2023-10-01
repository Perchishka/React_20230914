import React from "react";
import styles from "./styles.module.css";
import { Link } from "../BaseComponents/Link/link";
import FooterLink from "../FooterLink/styles.module.css";

export const Footer = ({ links }) => {
  const madeBy = { name: "Perchishka", path: "https://github.com/Perchishka" };
  return (
    <div className={styles.footer}>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.id}>
            <Link className={FooterLink.footer_link} link={link} />
          </li>
        ))}
      </ul>
      <div className={styles.dev}>
        <span className={styles.madeBy}>Made by: </span>
        <Link className={FooterLink.footer_link} link={madeBy} />
      </div>
    </div>
  );
};

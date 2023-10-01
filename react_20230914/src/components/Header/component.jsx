import React from "react";
import styles from "./styles.module.css"
import { Link } from "../BaseComponents/Link/link";

export const Header = () => {
  const madeBy = {name:"Sticky Header", path:"https://www.w3schools.com/howto/howto_js_sticky_header.asp"};
    return (
        <div className = {styles.header}>
          <div className={styles.header__container}>
            <div className="devs">
              <span>Sticky Header</span>
              <Link link ={madeBy}></Link>
            </div>
          </div>
        </div>
    )
  }
  
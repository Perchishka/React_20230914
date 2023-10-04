import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { Link } from "../BaseComponents/Link/link";
import { Button } from "../BaseComponents/Button/component";
import { ThemeContext } from "../../contexts/Theme";

export const Header = ({ className }) => {
  const { setTheme } = useContext(ThemeContext);
  const madeBy = {
    name: "Sticky Header",
    path: "https://www.w3schools.com/howto/howto_js_sticky_header.asp",
  };
  return (
    <div className={classNames(styles.header, className)}>
      <div className="devs">
        <Link link={madeBy}></Link>
      </div>
      <div>
        <Button onClick={()=> setTheme(false)} >"White theme"</Button>
        <Button onClick={()=> setTheme(true)}>"Dark theme"</Button>
      </div>
    </div>
  );
};

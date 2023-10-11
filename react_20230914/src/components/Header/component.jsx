import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { Link } from "../BaseComponents/Link/link";
import { Button } from "../BaseComponents/Button/component";
import { useTheme } from "../../hooks/use-theme-context";

export const Header = ({ className }) => {
  const { toggleTheme } = useTheme();
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
        <Button onClick={()=> toggleTheme(true)}>Toggle</Button>
      </div>
    </div>
  );
};

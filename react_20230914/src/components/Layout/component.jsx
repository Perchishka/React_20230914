import { Footer } from "../../components/Footer/component";
import { Header } from "../../components/Header/component";
import { links } from "../../constants/footer";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Layout = ({ children }) => {
  return (
    <div>
      <div className={classNames(styles.root)}>
        <Header className={styles.header} />
        <main>{children}</main>
        <Footer className={styles.footer} links={links}></Footer>
      </div>
      <div id="modal-container" className={styles.modalContainer}></div>
      <div id="popover-container" className={styles.popoverContainer}></div>
      <div id="tooltip-container" className={styles.tooltipContainer}></div>
    </div>
  );
};

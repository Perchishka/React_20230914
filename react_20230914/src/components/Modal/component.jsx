import { Button } from "../BaseComponents/Button/component";
import { createPortal } from "react-dom";

import styles from "./styles.module.css";

export const Modal = ({ children, onClose, withOverlay = true }) => {
  return createPortal(
    <>
      {withOverlay && <div className={styles.overlay} />}
      <div className={styles.modal}>
        <Button onClick={onClose}>Close</Button>
        {children}
      </div>
    </>,
    document.getElementById("modal-container")
  );
};

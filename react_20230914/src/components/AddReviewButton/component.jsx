import { createPortal } from "react-dom";
import { Button } from "../BaseComponents/Button/component";
import { ReviewForm } from "../ReviewForm/component"
import { useState } from "react";

import styles from "./styles.module.css";

export const AddReviewButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpened(true)}>Add Review</Button>
      {isModalOpened && createPortal(<ReviewForm onSubmit={() => setIsModalOpened(false)} className={styles.modal}/>,
      document.getElementById("modal-container")
        )}
    </>
  );
};

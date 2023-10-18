import { Button } from "../BaseComponents/Button/component";
import { ReviewForm } from "../ReviewForm/component";
import { useState } from "react";

import { Modal } from "../Modal/component";

export const AddReviewButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onClose = () => setIsModalOpened(false);

  return (
    <>
      <Button onClick={() => setIsModalOpened(true)}>Add Review</Button>
      {isModalOpened && (
        <Modal onClose={onClose}>
          <ReviewForm onSubmit={onClose}></ReviewForm>
        </Modal>
      )}
    </>
  );
};

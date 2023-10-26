import styles from "./styles.module.css";
import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
    <div>
      {review.text} - <UserContainer userId={review.userId} />
    </div>
    </div>
  );
};

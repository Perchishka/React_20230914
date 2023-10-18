import { useSelector } from "react-redux";
import {
  selectUserId,
} from "../../redux/entities/review/selector";

import styles from "./styles.module.css";

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
    <div>
      {review.text} - <UserContainer userId={review.userId} />
    </div>
    </div>
  );
};

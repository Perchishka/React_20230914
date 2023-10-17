import { useSelector } from "react-redux";
import {
  selectUserId,
} from "../../redux/entities/review/selector";

import styles from "./styles.module.css";
import { ReviewContainer } from "./container";
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

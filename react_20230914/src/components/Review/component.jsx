import { useSelector } from "react-redux";
import { selectReviewById, selectUserId } from "../../redux/entities/review/selector";
import { User } from "../User/component";

import styles from "./styles.module.css"

export const Review = ({ reviewId }) => {
  const review = useSelector((state)=> selectReviewById(state, reviewId));
  const userId = useSelector((state)=> selectUserId(state, reviewId))
  return (
    <div className={styles.review}>
      <User userId={userId} />
      <div>: {review.text}</div>
    </div>
  );
};

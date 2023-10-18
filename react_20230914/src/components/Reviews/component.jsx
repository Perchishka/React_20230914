import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews: </h3>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <ReviewContainer reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

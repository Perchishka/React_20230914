import { Review } from "../Review/component";

export const Reviews = ({ reviewsIds }) => {

  return (
    <div>
      <h3>Reviews: </h3>
    <ul>
      {reviewsIds.map((id) => (
        <li key={id}>
          <Review reviewId={id} />
        </li>
      ))}
    </ul>
    </div>
  );
};

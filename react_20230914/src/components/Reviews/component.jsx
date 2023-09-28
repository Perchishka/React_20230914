export const Reviews = ({ reviews }) => {
    return (
        <ul>
            {reviews?.map(review => (
                <li key={review.id}>
                    <div>{review.user}: {review.text}</div>
                </li>
            ))}
        </ul>
    )
}
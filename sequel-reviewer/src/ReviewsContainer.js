import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContainer({reviews, onDeleteReview}) {
    return (
        <main>
            <h1>Reviews</h1>
            <p>Click on an image to see more details</p>
            <ul>
                {reviews.map((review) => (<ReviewCard 
                key={review.id}
                reviewObj={review}
                onDeleteReview={onDeleteReview}
                />
                ))}
            </ul>
        </main>
    )
}

export default ReviewsContainer
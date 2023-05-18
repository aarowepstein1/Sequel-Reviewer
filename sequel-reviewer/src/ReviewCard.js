import React, {useState} from "react";

function ReviewCard({reviewObj, onDeleteReview}) {
    const [showDetails, toShowDetails] = useState(false)
    const {id, image, title, synopsis, review, score} = reviewObj

    function handleClick() {
        toShowDetails(!showDetails)
    }

    function handleDeleteReview() {
        fetch(`http://localhost:4000/reviews/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteReview(review))
    }

    return(
        <li id="review">
          <div>
            <img id="poster" onClick={handleClick} src={image} alt={title}/>
            <span id="score">{`${score}/5`}</span>
          </div>
          <h3>{title}</h3>
          {showDetails ? <div id="details">
            <p>{synopsis}</p>
            <p>{review}</p>
            <button onClick={handleDeleteReview}>Delete Review</button>
          </div> : null}
        </li>
    )
}

export default ReviewCard
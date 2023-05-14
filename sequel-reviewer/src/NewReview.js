import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function NewReview({ onAddReview }) {
    const [newReviewObj, setReviewObj] = useState({
        title: "", 
        image:"", 
        synopsis: "", 
        review: "", 
        score: 0
    })
    console.log(newReviewObj)
    const history = useHistory();

    function handleChange(e) {
        setReviewObj({
            ...newReviewObj,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
 
        fetch("http://localhost:4000/reviews", {
		      method: "POST",
		      headers: {
		        "Content-Type": "application/json",
		      },
		      body: JSON.stringify(newReviewObj),
		    })
		    .then((r) => r.json())
            //using callback function to lift the new review
            .then((newReview) => onAddReview(newReview));
            setReviewObj({
                title: "", 
                image:"", 
                synopsis: "", 
                review: "", 
                score: ""
            })
            history.push("/reviews")
    }
    
    return(
        <div>
            <h1>New Review</h1>
            <form id="form" onSubmit={handleSubmit}>
                <div>
                    <label>Movie Title:</label>
                    <input type="text" name="title" value={newReviewObj.title} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Movie Poster Link:</label>
                    <input type="text" name="image" value={newReviewObj.image} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Movie Synopsis:</label>
                    <br/>
                    <textarea type="text" name="synopsis" value={newReviewObj.synopsis} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Your Review:</label>
                    <br></br>
                    <textarea type="text" name="review" value={newReviewObj.review} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Your Score:</label>
                    <input type="text" name="score" value={newReviewObj.score} placeholder="1-5" onChange={handleChange}></input>
                </div>
                <button type="submit">Add Review</button>
            </form>
            <p>Please add your review here then return to Reviews and see it there.</p>

        </div>
        
    )
}

export default NewReview
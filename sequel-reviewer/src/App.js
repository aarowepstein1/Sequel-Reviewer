import React, {useEffect, useState} from 'react';
import './App.css';
import ReviewsContainer from './ReviewsContainer';
import {Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import NewReview from './NewReview';


function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(r => r.json())
    .then(movies => setReviews(movies))
  }, [])

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview])
  }  

  function handleDelete(deletedReview) {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id)
    setReviews(updatedReviews)
    console.log(deletedReview)
  }

  return (
    <div id='app'>
      <Navbar/>
      <Switch>
        <Route exact path="/reviews">
          <ReviewsContainer reviews={reviews} onDeleteReview={handleDelete}/>
        </Route>
        <Route path="/reviews/new">
          <NewReview onAddReview={handleAddReview}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';

const ReviewForm= props =>{
  if (props.business && props.currentUserId) {
    const review = props.review || {
      body: "",
      rating: "",
      id: null
    };
    debugger

    return (
      <section className="review-form-container">
        <h2>{props.title}</h2>
        <form className="review-form" onSubmit={(e)=>props.handleSubmit(e, props.action)}>
          {selectRating(props.update, review.rating)}

          <textarea className="review-textarea"
            placeholder="Sample Review Body"
            onChange={props.update("body")} value={review.body} required/>

          <input type="submit" value={props.buttonText} />
        </form>
      </section>
    )
  } else {
    return (<div></div>)
  }
};

const selectRating = (update, reviewRating) => {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(i);
  }

  debugger
  return (
    <section className="ratings-selection">
      {ratings.map(rating => (
        <label>{rating}
        <input className="rating-option" type="radio" name="rating" value={rating}
          onChange={update("rating")} required/>
      </label>
      ))}
    </section>
  )
}

export default ReviewForm;
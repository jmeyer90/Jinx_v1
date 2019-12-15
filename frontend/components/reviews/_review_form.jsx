import React from 'react';

const ReviewForm= props =>{
  if (props.business && props.currentUserId) {
    debugger
    const review = props.review || {
      body: "",
      rating: ""
    }
    return (
      <section className="review-form-container">
        <h2>{props.title}</h2>
        <form className="review-form" onSubmit={(e)=>props.handleSubmit(e, props.action)}>

          {selectRating(props.update)}

          <textarea className="review-textarea"
            placeholder="Sample Review Body"
            onChange={props.update("body")} name={review.body}/>

          <input type="submit" value={props.buttonText} />
        </form>
      </section>
    )
  } else {
    return (<div></div>)
  }
};

const selectRating = (update) => {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(i);
  }

  return (
    <section className="ratings-selection">
      {ratings.map(rating => (
        <input className="rating-option" type="radio" value={rating}
          onClick={update("rating")} />
      ))}
    </section>
  )
}

export default ReviewForm;
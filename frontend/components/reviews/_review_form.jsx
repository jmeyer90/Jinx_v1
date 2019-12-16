import React from 'react';

const ReviewForm= props =>{
  if (props.business && props.currentUserId) {
    const review = props.review || {
      body: '',
      rating: '',
      id: null
    };
    debugger

    return (
      <section className={'review-form-container-'.concat(props.htmlClass)}>
        {/* use partial for rendering user info */}
        {profileImg(props.htmlClass)}
        <form className={'review-form-'.concat(props.htmlClass)} onSubmit={(e)=>props.handleSubmit(e, props.action)}>
          {selectRating(props.update, props.htmlClass)}
          <hr className={'review-line-'.concat(props.htmlClass)}/>
          {reviewDeatils(review, props.update, props.htmlClass)}

          <input className={'review-submit-'.concat(props.htmlClass)} type='submit' value={props.buttonText} />
        </form>
      </section>
    )
  } else {
    return (<div></div>)
  }
};

const profileImg = htmlClass =>{ // partial for displaying user profile pic? or just image tag?
  if(htmlClass === 'create'){
    return(
      <h2 className='profile-img'>User</h2>
    )
  } else {
    return( <div></div> )
  }
}

const selectRating = (update, htmlClass) => {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(i);
  }

  return (
    <section className={'ratings-selection-'.concat(htmlClass)}>
      {ratings.map((rating, idx )=> (
        <label key={rating}>
          <input key={rating} className={'rating-option-'.concat(htmlClass)} type='radio' name='rating' value={rating}
          onChange={update('rating')} required/>
          {/* onChnage={(e) => rating=e.currentTarget.value} */}
      </label>
      ))}
    </section>
  )
}

const reviewDeatils = (review, update, htmlClass) => {
  return(
    <textarea className={'review-textarea-'.concat(htmlClass)}
      placeholder='Sample Review Body'
      onChange={update('body')} value={review.body} />
      // onChange={(e) => review=e.currentTarget.value}
  )
}

export default ReviewForm;
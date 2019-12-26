import React from 'react';

const ReviewForm= props =>{
  
  if (props.business && props.currentUserId) {
    const review = props.review || {
      body: '',
      rating: '',
      id: null
    };

    return (
      <section className={'review-form-container-'.concat(props.htmlClass)}>

        {profileImg(props.htmlClass)}
        <form className={'review-form-'.concat(props.htmlClass)} onSubmit={(e)=>props.handleSubmit(e, props.action)}>
          {selectRating(props.update, props.htmlClass)}
          <hr className={'review-line-'.concat(props.htmlClass)}/>
          {actionLogic(review, props.update, props.htmlClass, props.handleFile)}
            <input className={'review-submit-'.concat(props.htmlClass)} type='submit' value={props.buttonText} />
        </form>

        <section className="form-buttons">
          {updateButtons(props.htmlClass, props.deleteReview, props.resetState, props.review)}
        </section>

      </section>
    )
  } else {
    return (<div></div>)
  }
};

const profileImg = htmlClass =>{ 
  if(htmlClass === 'create'){
    return(
      <figure className="profile-img">
        <img className="profile-img-src" src={window.userImg} alt="profile-image" />
      </figure>
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
      </label>
      ))}
    </section>
  )
}

const actionLogic = ( review, update, htmlClass, handleFile ) =>{
  if (htmlClass === "create") {
    // let show = false;
    // if (show){
      return(
        reviewDetails(review, update, htmlClass)
    //   )
    // } else {
    //   return(
    //     <>
    //       <button type="button" onClick={() => {show=true}}>Write a Review </button>
    //       { show ? reviewDetails(review, update, htmlClass, handleFile) : <div></div>}
    //     </>
      )
    } else {
    return(
      reviewDetails( review, update, htmlClass, handleFile )
    )
  }
}


const reviewDetails = (review, update, htmlClass ) => {
  return(
    <section className={`data-input-${htmlClass}`}>
      <textarea className={'review-textarea-'.concat(htmlClass)}
        placeholder='Sample Review Body'
        onChange={update('body')} value={review.body} />
      {/* <input type="file" onChange={(e) => handleFile(e)}/> */}
    </section>
  )
}

const updateButtons = ( htmlClass, deleteReview, resetState, review ) =>{
  if(htmlClass==="update"){
    return(
      <section className="form-button-section">
        <button type="button" className="review-actions-button" onClick={() => deleteReview(review)}>
          Delete Review
        </button>
        < button type="button" className="review-actions-button"onClick={() => resetState(review.id)}>
          Hide
        </button >
      </section>
    )
  }
}

export default ReviewForm;
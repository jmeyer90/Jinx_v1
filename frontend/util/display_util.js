import React from 'react';

export const displayRating = rating =>{
  let stars = Array(10).fill(null);
  const score = rating * 2;
  const numStarHalves =Array(stars.length / 2).fill(null).map( (half, idx) => idx);

  for( let i=0; i<score; i++){
    stars[i]= true;
  }

  return (
    <section className="star-container">
      <span className="star-sub-container">
        {numStarHalves.map(starHalfIdx => htmlRatingDispaly( stars[ starHalfIdx*2 ], stars[ starHalfIdx*2 + 1], starHalfIdx ))}
      </span>
    </section> )
}

const htmlRatingDispaly = ( lefthalf, righthalf, idx ) =>{
  return(
    <figure key={idx} className="star">
      <figure className="left-half">
        <div className={filled(lefthalf)}>
          {dispStar(lefthalf)}
        </div>
      </figure>
      <figure className="right-half">
        <div className={filled(righthalf)}>
          {dispStar(righthalf)}
        </div>
      </figure>
    </figure>
  )
}

const filled = half =>(
  half ? "filled" : "empty"
)

const dispStar = half =>(
  half ? "1" : "0"
)
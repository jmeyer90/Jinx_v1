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
      {numStarHalves.map(starHalfIdx => htmlRatingDispaly( stars[ starHalfIdx*2 ], stars[ starHalfIdx*2 + 1], starHalfIdx ))}
    </section> )
}

const htmlRatingDispaly = ( lefthalf, righthalf, idx ) =>{
  return(
    <figure className="star">
      <figure className="left-half">
        <div className={filled(lefthalf)}>
          left-half {idx} {filled(lefthalf)}
        </div>
      </figure>
      <figure className="right-half">
        <div className={filled(righthalf)}>
          right-half {idx} {filled(righthalf)}
        </div>
      </figure>
    </figure>
  )
}

const filled = half =>(
  half ? "filled" : "empty"
)
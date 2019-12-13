import React from 'react';

const reviewItems = (user, review) =>{
  return(
    <li key={review.id} className="business-review-item">
      {user.f_name}'s Review: {review.body}
    </li>
  )
};

const BusinessReviews = (props) =>{
    
  return (
    <section className="business-reviews" >
      {props.business.name} Reviews:
      <ul className="business-review-list" >
        { Object.keys(props.reviews).map( reviewId => {
          let review = props.reviews[reviewId];
          let user = props.users[review.user_id];
          return(
            reviewItems (user, review)
          )}
        )}
      </ul>
    </section >
  )
}

export default BusinessReviews;

// class BusinessReviews extends React.Component{
//   constructor(props){
//     super(props);
//   }
  
//   componentDidMount(){
//     debugger
//     this.props.fetchReviews(this.props.businessId)
//     if (this.props.reviews){
//       const reviews = Object.values(this.props.reviews)
//       reviews.forEach( review =>(
//         <div></div>// placeholder
//       ))
//     }
//   }
  
//   render(){

//     debugger
//     const reviews = this.props.reviews ? Object.values(this.props.reviews) : [];

//     return (
//       <section className="business-reviews" >
//         {this.props.business.name} Reviews:
//         <ul className="business-review-list" >
//           {reviews.map(review => (
//             <li key={review.id} className="business-review-item">
//               {/* User: {review.user.name} */}
//               <p className="review-body">{review.body}</p>
//             </li>
//           ))}
//         </ul>
//       </section >
//     )
//   }
// }


// export default BusinessReviews;
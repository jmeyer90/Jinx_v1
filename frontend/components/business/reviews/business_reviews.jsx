import React from 'react';

const user = (users, user_id) =>{

};

const BusinessReviews = (props) =>{

  if( props.business && props.business.reviews ){
    const reviewKeys = Object.keys(props.business.reviews[0]);
    const users = props.business.users[0]
    let review;
    
    return (
      <section className="business-reviews" >
        {props.business.name} Reviews:
        <ul className="business-review-list" >
          { reviewKeys.map(rKey => {
            review = props.business.reviews[0][rKey];
            return(
              <li key={review.id} className="business-review-item">
                User: {users[review.user_id].f_name}
                <p className="review-body">{review.body}</p>
              </li>
            )}
          )}
        </ul>
      </section >
    )
  } else {
    return( <div></div> )
  }
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
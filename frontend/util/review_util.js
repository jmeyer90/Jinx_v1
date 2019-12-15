export const fetchReviews = businessId => {
  
  return(
    $.ajax({
      url: `/api/businesses/${businessId}/reviews`,
      method: "GET"
    })
  )
};

export const fetchReview = (businessId, reviewId) => (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews/${reviewId}`,
    method: "GET"
  })
);

export const createReview = (businessId, review) => (
  $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "POST",
    data: { review }
  })
)

export const updateReview = (businessId, review)  => {
  debugger
  return(
    $.ajax({
      url: `/api/businesses/${businessId}/reviews/${review.id}`,
      method: "PATCH",
      data: { review }
    })
  )
}

export const deleteReview = (reviewId) =>(
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
)
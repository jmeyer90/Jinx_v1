export const fetchBusinesses = () => (
  $.ajax({
    url: `/api/businesses`,
    method: "GET"
  })
);

export const fetchBusiness = businessId => (
  $.ajax({
    url: `/api/businesses/${businessId}`,
    method: "GET"
  })
);
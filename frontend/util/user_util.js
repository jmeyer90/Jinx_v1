export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })
);

export const createUser = user => (
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: { user } 
  })
);
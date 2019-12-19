export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const REMOVE_SEARCH_RESULTS = "REMOVE_SEARCH_RESULTS";

const receiveSearchResults = searchResults => {
  return({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  })
}

const removeSearchResults = () =>{
  return({
    type: REMOVE_SEARCH_RESULTS
  })
}

export const fetchSearchResults = searchResults => dispatch =>{
  return(
    dispatch(receiveSearchResults(searchResults))
  )
}

export const clearSearchResults = () => dispatch =>{
  return(
    dispatch(removeSearchResults())
  )
}
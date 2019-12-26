import { populateSearchResults, clearSearchResults } from '../../actions/search_actions';
import { connect } from 'react-redux';
import SearchResults from './search_results';

const msp = state => ({
  businesses: state.entities.businesses,
  reviews: state.entities.reviews,
  attrs: state.search.attrs,
  attrCats: state.search.attrCats,
  menuItems: state.search.menuItems,
  businessNames: state.search.businessNames,
  searchResults: state.search.searchResults
})

const mdp = dispatch => ({
  populateSearchResults: searchResults => dispatch( populateSearchResults( searchResults )),
  clearSearchResults: () => dispatch( clearSearchResults())
})

export default connect(msp, mdp)(SearchResults);
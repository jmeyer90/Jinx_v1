import { connect } from 'react-redux';
import Search from "./search";
import { fetchBusinesses } from "../../actions/business_actions";
import { populateSearchResults } from '../../actions/search_actions';

const msp = (state, ownProps) =>(
  {
    attrs: state.search.attrs,
    attrCats: state.search.attrCats,
    menuItems: state.search.menuItems,
    businessNames: state.search.businessNames
  }
);

const mdp = dispatch =>({
  fetchBusinesses: () => dispatch( fetchBusinesses()),
  populateSearchResults: searchResults => dispatch( populateSearchResults( searchResults ))
})

export default connect( msp, mdp )( Search );
import { connect } from 'react-redux';
import Search from "./search";
import { fetchBusinesses } from "../../actions/business_actions";

const msp = state =>({
  attrs: state.search.attrs,
  attrCats: state.search.attrCats,
  menuItems: state.search.menuItems,
  businessNames: state.search.businessNames
});

const mdp = dispatch =>({
  fetchBusinesses: () => dispatch( fetchBusinesses())
})

export default connect( msp, mdp )( Search );
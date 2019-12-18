import { connect } from 'react-redux';
import Search from "./search";
import { fetchBusinesses } from "../../actions/business_actions";

const msp = state =>({
  businesses: state.businesses.entities || {}
});

const mdp = dispatch =>({
  fetchBusinesses: () => dispatch( fetchBusinesses())
})

export default connect( msp, mdp )( Search );
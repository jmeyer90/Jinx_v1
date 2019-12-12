import Splash from './splash';
import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';

// import BuinessIndexItem from '../business/business_index_item';

const msp = state =>({
  businesses: state.entities.businesses
});

const mdp = dispatch =>({
  fetchBusiness: (businessId => dispatch( fetchBusiness( businessId ))),
  fetchBusinesses: (() => dispatch( fetchBusinesses()))
});

export default connect( msp, mdp )( Splash );

// const businesses = fetchBusinesses();

// debugger
// const allBusiness = (businesses) => {
//   arrBiz = Object.values(businesses);

//   return(
//     <ul>
//       { arrBiz.map( business=>(
//       <Link to={`/api/businesses/${business.id}`}>{business.name}</Link>
//       ))}
//     </ul>
//   )
// }

// export default allBusiness;
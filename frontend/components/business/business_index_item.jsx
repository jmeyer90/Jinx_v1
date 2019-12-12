import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = props =>{

  return(
    <li>
      <Link key={ props.business.id } className="business-index-item" to={`/businesses/${props.business.id}`}>
        { props.business.name }
      </Link>
    </li>
  )
}

export default BusinessIndexItem;
import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = props =>{

  return(
    <li key={props.business.id} className="business-index-container">
      <Link key={props.business.id} className="business-index-link" to={`/businesses/${props.business.id}`}>
        <figure className="business-index-img">
          <img className="business-img-src" src={window.bizImg} alt="business-image" />
      </figure>
      <section className="business-index-info">
        <span className="business-index-name">
            {props.business.name}
        </span>
        <span className="business-index-rating-container">
          <div className="business-index-rating">{props.business.rating}</div>
        </span>
        {businessType(props.business)}
        <p className="business-index-review">{ props.review.body }</p>
      </section>
      </Link>
    </li>
  )
}

const businessType = business =>{
  const attrs = business.attribute_items || [];

  const biz_type  = [];

  for(let i=0; i <attrs.length; i++){
    let attr = attrs[i];
    if ( attr.attr_type === "Business Type" || attr.attr_type === "Cuisine" ){
      biz_type.push(attr);
    }
  }

  return(
    <span className="business-index-attrs">
      { biz_type.map( attr =>(
        <p key={attr.id} className="index-attr">{attr.name}</p>
      ))}
    </span>
  )
}

export default BusinessIndexItem;
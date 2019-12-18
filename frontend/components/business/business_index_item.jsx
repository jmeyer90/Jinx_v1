import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = props =>{

  debugger
  return(
    <li key={props.business.id} className="business-index-container">
      <figure className="business-index-img">
        <img src={window.businessImg} alt="wizard restaurant"/>
      </figure>
      <section className="business-index-info">
        <Link key={ props.business.id } className="business-index-link" to={`/businesses/${props.business.id}`}>
          { props.business.name }
        </Link>
        <span className="business-index-rating-container">
          <div className="business-index-rating">{props.business.rating}</div>
        </span>
        {businessType(props.business)}
        <p className="business-index-review">{ props.review.body }</p>
      </section>
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
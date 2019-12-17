import React from 'react';

const Attributes = props => {
  let categories = {};
  const attr_items = props.business.attribute_items || [];

  for (let i = 0; i < attr_items.length; i++) {
    let category = attr_items[i].attr_type;
    categories[category] = categories[category] || [];
    categories[category].push(attr_items[i].name)
  }

  if (attr_items) {
    return (
      <section className="show-attribute-list">
        <h2 className="attribute-heading">Known For</h2>
        <ul className="all-attributes-container">
          {Object.keys(categories).map((category, idx1) => (
            <li key={idx1} className="attribute-categories-container">
              <ul className="attribute-categories">
                <h2 className="category">{category}</h2>
                {categories[category].map((attr, idx2) => (
                  <li key={idx2} className="attr-name">
                    {attr}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    )
  } else {
    return (<div></div>)
  }
}

export default Attributes;
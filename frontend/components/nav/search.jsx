import React from 'react';
import SearchFrom from './seach_form';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      attrs: [],
      menuItems: [],
      bizNames: []
    }
    this.searchableData = this.searchableData.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusinesses();
    this.searchableData(this.props.businesses);
  }

  searchableData(businesses){
    if(businesses){

      let attrs = [];
      let menuItems = [];

      const bizNames = Object.values(businesses).map(business => {
        debugger
        bizName = { [business.name]: businesses.values[0] };
        attrs.concat(business.attribute_items);
        menuItems.concat(business.menuItems);
        return (bizName)
      });

      attrs = [...new Set(attrs)];

      this.setState({
        attrs: attrs,
        menuItems: menuItems,
        bizNames: bizNames
      })
    }
  }

  render(){

    return(
      <section>
        {this.searchFrom()}
      </section>
    )
  }
}

export default Search;
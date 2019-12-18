import React from 'react';
import SearchForm from './search_form';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      attrs: [],
      menuItems: [],
      bizNames: []
    }
    this.searchableData = this.searchableData.bind(this);
    this.searchForm = this.searchForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusinesses();
    // this.searchableData(this.props.businesses);
  }

  searchForm(){
    debugger
    return(
      <SearchForm bizNames={this.state.bizNames} attrs={this.state.attrs} menuItems={this.state.menuItems}/>
    )
  }

  searchableData(businesses){
    if(businesses){

      let attrs = [];
      let menuItems = [];

      const bizNames = Object.values(businesses).map(business => {
        debugger
        bizName = { [business.name]: businesses.id };
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
        {this.searchForm()}
      </section>
    )
  }
}

export default Search;
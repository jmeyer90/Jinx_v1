import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      menuItems: [],
      attrs: [],
      bizNames: []
    }
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  sortData(businesses){
    let attrs = [];
    let menuItems = [];
    const bizNames = Object.values(businesses).map( business =>{
      bizName = {[business.name]: businesses.values[0]};
      attrs.concat(business.attribute_items);
      menuItems.concat(business.menuItems);
      return( bizName )
    });

    this.setState({})
  }

  render(){
    return(
      <h2>Search</h2>
    )
  }
}

export default Search;
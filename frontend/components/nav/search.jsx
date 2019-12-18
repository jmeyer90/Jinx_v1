import React from 'react';
import SearchForm from './search_form';
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      results: {}
    }

    this.searchableData = this.searchableData.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.generalFilter = this.generalFilter.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  searchForm(){
    return(
      <section className="search-bar">
        <label className="search-title">
          Find
          <input type="text" placeholder="Burgers, American, Lebanese" onChange={(e)=>this.generalFilter(e)} />
        </label>
      </section>
    )
  }

  generalFilter(e){
    const filter = e.currentTarget.value;

    filteredAttrs= filter( filter, this.props.attrs );
    filteredMenuItems = filter( filter, this.props.menuItems );
    filteredBusinessNames = filter( filter, this.props.businessNames );
    this.setState({
      results: {
        attrs: filteredAttrs,
        menuItems: filteredMenuItems,
        businessNames: filteredBusinessNames
      }
    })
  }

  filter(filter, attrs){
    let filtered={}
    
    Object.keys(this.props.attrs).forEach( attrKey =>{
      if( attrKey.includes( filter )){
        filtered[attrKey] = attrs[attrKey];
      }
    });

    return filtered;
  }

  render(){
    
    return(
      <section>
        {this.searchForm()}
        {this.dispSearchResults(this.state.results)}
      </section>
    )
  }
}

export default Search;
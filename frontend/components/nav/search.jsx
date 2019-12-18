import React from 'react';
import SearchForm from './search_form';
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      filter: {
        general: ""
      },
      results: {}
    }

    this.searchableData = this.searchableData.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.locationFilter = this.locationFilter.bind(this);
    this.generalFiler = this.generalFiler.bind(this);
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
          <input type="text" placeholder="Burgers, American, Lebanese" onChange={(e)=>this.filter(e)} />
        </label>
        <label className="search-title">
          Near
          <input type="text" placeholder="The Shire, Helm's Deep, Atlantis..." onChange={(e) => this.locationFilter(e)}/>
        </label>
        <Link></Link>
      </section>
    )
  }

  generalFiler(e){
    const filter = e.currentTarget.value;
    let filteredVals = {};

    fileredVals = filteredVals.concat( filter( filter, this.props.attrs ));
    fileredVals = filteredVals.concat( filter( filter, this.props.menuItems ));
    fileredVals = filteredVals.concat( filter( filter, this.props.businessNames ));
  }

  locationFilter(e){
    const filter = e.currentTarget.value;
    let locations = [];

    this.props.neighborhoods.forEach(location=>{
      if ( location.includes(filter) ){
        locations.push(location);
      }
    })

    this.filter({ neighborhoods: locations })
  }

  filter(e){
    const attrArr = Object.keys(this.props.attr);

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
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
          <input type="text" placeholder="Burgers, American, Lebanese" onChange={(e)=>this.filter(e, "general")} />
        </label>
        <label className="search-title">
          Near
          <input type="text" placeholder="The Shire, Helm's Deep, Atlantis..." onChange={(e) => this.filter(e, "neighborhood")}/>
        </label>
        <Link></Link>
      </section>
    )
  }

  filer(e, field){
    
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
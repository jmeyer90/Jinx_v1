import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      results: {}
    }

    this.searchForm = this.searchForm.bind(this);
    this.generalFilter = this.generalFilter.bind(this);
    this.filter = this.filter.bind(this);
    this.dispSearchResults = this.dispSearchResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount(){
    if (!this.props.businessNames || this.props.businessNames.length <= 1 ){
      this.props.fetchBusinesses()
    }
  }

  handleSubmit(){
    this.setState({ results: {} });

    const modal = document.getElementById("search-modal");
    modal.style.display = "none";
    modal.style.zIndex = -1;
  }

  searchForm(){
    return(
      <section className="search-form-container">
        <form className="search-form" onSubmit={()=>this.handleSubmit()}>
          <h2 className="search-title">Find</h2>
          <input className="search-input" type="text" 
            placeholder="Burgers, American, Wheelchair Accessible" 
            onChange={(e)=>this.generalFilter(e)} />
        <button className="search-submit">Search</button>
        </form>
      </section>
    )
  }

  clearSearch(){
    const modal = document.getElementById("search-modal");
    modal.style.display = "none";
    modal.style.zIndex = -1;
    this.setState({ results: {} })
  }

  generalFilter(e){
    const filter = e.currentTarget.value;

    if (filter === "") {
      this.clearSearch();
    } else {

      const filteredAttrs = this.filter(filter, this.props.attrs);
      const filteredMenuItems = this.filter(filter, this.props.menuItems);
      const filteredBusinessNames = this.filter(filter, this.props.businessNames);

      this.setState({
        results: {
          attrs: filteredAttrs,
          menuItems: filteredMenuItems,
          businessNames: filteredBusinessNames
        }
      })
    }
  }

  filter(filter, attrs){
    let filtered={}
    
    debugger
    Object.keys(attrs).forEach( attrKey =>{
      if( attrKey.toLowerCase().includes( filter.toLowerCase() )){
        filtered[attrKey] = attrs[attrKey];
      }
    });

    debugger
    return filtered;
  }

  dispSearchResults(searchResults) {
    debugger
    return (
      <section className="search-dropdown">
        <section className="search-category-container">
          {this.disp(searchResults.businessNames, "Businesses")}
        </section>
        <section className="search-category-container">
          {this.disp(searchResults.menuItems, "Menu Items")}
        </section>
        <section className="search-category-container">
          {this.disp(searchResults.attrs, "Business Attributes")}
        </section>
      </section>
    )
  }

  disp(category, title) {
    debugger
    const modal = document.getElementById("search-modal");

    if (category && Object.keys(category).length > 0) {
      modal.style.display = "block";
      modal.style.zIndex = 1;

      debugger
      return (
        <section className="category">
          <h2 className="search-section-title">{title}</h2>
          <label className="search-category">
            {Object.keys(category).map((attrName, idx) => (
              <Link key={idx} className="search-result-text"
               to={`/businesses/${category[attrName]}`}
               onClick={()=>this.clearSearch()}>
                 {attrName}
              </Link>
            ))}
          </label>
        </section>
      )
    } 
  }

  render(){
    
    return(
      <section className="search-bar-container">
        {this.searchForm()}
        <section id="search-modal" className="search-dropdown-container">
          {this.dispSearchResults(this.state.results)}
        </section>
      </section>
    )
  }
}

export default Search;
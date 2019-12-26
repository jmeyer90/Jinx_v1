import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      results: {},
      redirectToResults: false
    }

    this.searchForm = this.searchForm.bind(this);
    this.generalFilter = this.generalFilter.bind(this);
    this.filter = this.filter.bind(this);
    this.dispSearchResults = this.dispSearchResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.sendToResults = this.sendToResults.bind(this);
  }

  componentDidMount(){
    this.clearSearch();
  }

  handleSubmit(){
    this.setState({ results: {} });

    const modal = document.getElementById("search-modal-background");
    modal.style.display = "none";
    modal.style.zIndex = -1;

    this.props.populateSearchResults( this.state.results );
    this.setState({ redirectToResults: true })
  }

  searchForm(){
    return(
      <section className="search-form-container">
        <form className="search-form" onSubmit={()=>this.handleSubmit()}>
          <h2 className="search-title">Find</h2>
          <input id="search-input-text" className="search-input" type="text" 
            placeholder="Burgers, American, Wheelchair Accessible" 
            onChange={(e)=>this.generalFilter(e)} />
        <button className="search-submit">Search</button>
        </form>
      </section>
    )
  }

  clearSearch(){
    const modal = document.getElementById("search-modal-background");
    modal.style.display = "none";
    modal.style.zIndex = -1;
    this.setState({ results: {} })

    const input = document.getElementById("search-input-text");
    input.value = "";
  }

  sendToResults(){
    if(this.state.redirectToResults) {

      return (
        <Redirect to="/search" />
      )
    }
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
    
    Object.keys(attrs).forEach( attrKey =>{
      if( attrKey.toLowerCase().includes( filter.toLowerCase() )){
        filtered[attrKey] = attrs[attrKey];
      }
    });

    return filtered;
  }

  dispSearchResults(searchResults) {
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
    const modal = document.getElementById("search-modal-background");

    if (category && Object.keys(category).length > 0) {
      modal.style.display = "block";
      modal.style.zIndex = 1;

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

  render() {
    
    return(
      <>
        <section className="search-bar-container">
          {this.searchForm()}
          <span id="search-modal-background" className="search-modal-background" onClick={ ()=> this.clearSearch() }>
            <section id="search-modal" className={`search-dropdown-container`}>
              {this.dispSearchResults(this.state.results)}
            </section>
          </span>
        </section>
        {this.sendToResults()}
      </>
    )
  }
}

export default Search;
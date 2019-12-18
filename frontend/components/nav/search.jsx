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
  }

  componentDidMount(){
    this.props.fetchBusinesses();
  }

  handleSubmit(){
    // Link to page to display search reulst
    // Send state
    // display attributes with links to business page
    // display business index items.
    this.setState({ results: {}});
  }

  searchForm(){
    return(
      <section className="search-form-container">
        <form className="search-form" onSubmit={()=>this.handleSubmit()}>
          <h2 className="search-title">Find</h2>
          <input className="search-input" type="text" 
            placeholder="Burgers, American, Wheelchar Accessible" 
            onChange={(e)=>this.generalFilter(e)} />
        <button>Search</button>
        </form>
      </section>
    )
  }

  generalFilter(e){
    const filter = e.currentTarget.value;

    if (filter === "") {

      this.setState({ results: {} })

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
        <section className="search-business">
          {this.disp(searchResults.businessNames, "Businesses")}
        </section>
        <section className="search-menu">
          {this.disp(searchResults.menuItems, "Menu Items")}
        </section>
        <section className="search-attr">
          {this.disp(searchResults.attrs, "Business Attributes")}
        </section>
      </section>
    )
  }

  disp(category, title){
    if (category && Object.keys(category).length > 0) {
      return (
        <section className="category">
          <h2 className="search-section-title">{title}</h2>
          <label className="search-category">
            {Object.keys(category).map((attrName, idx) => (
              <Link key={idx} to={`/businesses/${category[attrName]}`}
               onClick={()=>this.setState({ results: {} })}>
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
        <section className="search-dropdown-container">
          {this.dispSearchResults(this.state.results)}
        </section>
      </section>
    )
  }
}

export default Search;
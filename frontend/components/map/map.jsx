import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component{
  constructor(props){
    super(props);
    // this.addBusinessLocation = this.addBusinessLocation.bind(this);
  }

  // componentDidMount(){
  //   if (this.props.center){
  //   const map = ReactDOM.findDOMNode(this.refs.map);
  //   const options = {
  //     center: this.props.center,
  //     zoom: 14
  //   }
  //   this.map = new google.maps.Map(map, options);

  //   debugger

  //   Object.values(this.props.businesses).forEach( business =>{
  //     this.addBusinessLocation(business)
  //   })}
  // }

  // addBusinessLocation(business){
  //   const lat = business.latitude;
  //   const lng = business.longitude;
  //   debugger
  //   const position = new google.maps.LatLng(
  //     lat, lng
  //   );

  //   const marker = new google.maps.Marker({
  //     position: position,
  //     map: this.map
  //   });

  //   // Add event listener, click on business marker links to business page
  // }

  render(){
    return(
      <div id="map" className="map "ref="map"></div>
    )
  }
}

export default Map;
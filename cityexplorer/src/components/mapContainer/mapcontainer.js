import React from 'react';

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: null,
      long: null
    }
  }
  render(){
    return <>
    {/* {this.props.map.formatted_query} */}
    {
      this.props.map &&
    this.props.map.latitude && this.props.map.longitude ? 
    <img id="map" class="" src="https://maps.googleapis.com/maps/api/staticmap?center=45.512231%2c%20-122.658719&amp;zoom=13&amp;size=600x300&amp;maptype=roadmap
    &amp;key=AIzaSyB970sq463V8z0WkPKlDcdVK3ZdCugwwXM" alt="Map of search query"/>
    : ''
    }
    </>
  }
}

export default MapContainer;
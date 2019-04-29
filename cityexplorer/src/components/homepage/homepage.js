
import React from 'react';
import WeatherContainer from '../containers/weatherContainer.js';
import MovieContainer from '../containers/movieContainer.js';
import YelpContainer from '../containers/yelpContainer.js';
import MeetupContainer from '../containers/meetupContainer.js';
import HikingContainer from '../containers/hikingContainer.js';

let superagent = require('superagent');

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {location:''}
  }
  setLocation = e => {
    this.setState({location:e.target.value});
  }
  submitButton = (e) => {
    e.preventDefault();
    console.log(this.state.location);
    this.getData();
  }
  
  getData = () => {
    superagent.get('https://city-explorer-backend.herokuapp.com/location')
    .query(`data=${this.state.location}`)
    .then(location => {
      this.setState({map:location});
      console.log(this.state.map);
      this.getResource('weather', this.state.map.body);
      this.getResource('movies', this.state.map.body);
      this.getResource('yelp', this.state.map.body);
      this.getResource('meetups', this.state.map.body);
      this.getResource('trails', this.state.map.body);
    })
  }
  getResource = (resource, location) => {
    superagent.get(`https://city-explorer-backend.herokuapp.com/${resource}`, {data: location})
    
    .then(result => {
      console.log(resource, result);
      this.setState({[resource]:result});
    })
  }

  render() {
    return <>
    <header>
    <h1>City Explorer</h1>
    <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
  </header>
  <main>
    <form id="search-form" >
      <label>Search for a location</label>
      <input type="text" name="search" id="input-search" onChange={this.setLocation} placeholder="Enter a location here" />
        <button onClick={this.submitButton}>Explore!</button>
      </form>
      {
      this.state.map &&
      this.state.map.body.latitude && this.state.map.body.longitude ? 
      <img id="map" className='' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.map.body.latitude}%2c%20${this.state.map.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_API_KEY}`} alt="Map of search query"/> : '' }
      {
        this.state.map ? (<h2 className='query-placeholder'>Here are the results for {this.state.map.body.formatted_query}</h2>):''
      }
      <section className="error-container"></section>
      
      <div className='column-container'>
        {
          this.state.weather ? (<WeatherContainer data={this.state.weather.body}/>):('')
        }
        {
          this.state.yelp ? (<YelpContainer data={this.state.yelp.body}/>):('')
        }
        {
          this.state.meetups ? (<MeetupContainer data={this.state.meetups.body}/>):('')
        }
        {
          this.state.movies ? (<MovieContainer data={this.state.movies.body}/>):('')
        }
        {
          this.state.trails ? (<HikingContainer data={this.state.trails.body}/>):('')
        }
        </div>
     


    </main>
  </>
  }
}

export default Homepage;

import React from 'react';
import './../../design/style.css';

class WeatherContainer extends React.Component {
  render(){
    return <section>
      <h3>Results from the Dark Sky API</h3>
      <ul className='weather-results'>
    {
      this.props.data.map( (item, idx) => (
        <li key={idx}>The forecast for {item.time} is {item.forecast}</li>
      ))
    }
    </ul>
    </section>

  }
}

export default WeatherContainer;
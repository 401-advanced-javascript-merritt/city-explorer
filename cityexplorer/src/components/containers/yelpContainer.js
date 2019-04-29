import React from 'react';
import './../../design/style.css';

class YelpContainer extends React.Component {
  render(){
    return <section className= 'yelp-container'>
    <h3>Results from the Yelp API</h3>
      <ul className='yelp-results'>
    {
      this.props.data.map( (item, idx) => (
        <li key={idx}>
          <a href={item.url}>{item.name}</a>
          <p>The average rating is {item.rating} out of 5 and the average cost is {item.price} out of 4.</p>
          <img src={item.image_url} alt={item.name} />
        </li>
      ))
    }
    </ul>
    </section>
  }
}

export default YelpContainer;
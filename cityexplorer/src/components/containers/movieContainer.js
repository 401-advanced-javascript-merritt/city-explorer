import React from 'react';
import './../../design/style.css';

class MovieContainer extends React.Component {
  render(){
    return <section className='movie-container'>
    <h3>Results from the Movie API</h3>
      <ul class='movies-results'>
    {
      this.props.data.map( (item, idx) => (
        <li key={idx}>
          <p><span>{item.title}</span> was released on {item.released_on}. Out of {item.total_votes} total votes, {item.title} has an average vote of {item.average_votes} and a popularity score of {item.popularity}.</p>
          <img src={item.image_url} alt={item.title}></img>
          <p>{item.overview}</p>
        </li>
      ))
    }
    </ul>
    </section>

  }
}

export default MovieContainer;
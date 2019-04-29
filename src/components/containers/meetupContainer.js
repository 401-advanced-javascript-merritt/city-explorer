import React from 'react';
import './../../design/style.css';

class MeetupContainer extends React.Component {
  render(){
    return <section>
    <h3>Results from the Meetup API</h3>
      <ul className='meetups-results'>
    {
      this.props.data.map( (item, idx) => (
        <li key={idx}>
          <a href={item.link}>{item.name}</a>
          <p>Hosted by: {item.host}</p>
          <p>Created on: {item.creation_date}</p>
        </li>
      ))
    }
    </ul>
    </section>
  }
}

export default MeetupContainer;
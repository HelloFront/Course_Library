import React from 'react';
import TestimonialItem from './TestimonialItem';

class Testimonials extends React.Component {
  render() {
    return(
      <div className="testimonials_block">
        <div className="container">
          <div className="description">
            <h5>TESTIMONIALS</h5>
            <h3>Student Reviews</h3>
          </div>
          <div className="cards">
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;
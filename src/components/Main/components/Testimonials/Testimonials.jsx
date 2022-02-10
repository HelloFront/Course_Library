import React from 'react';
import TestimonialItem from '../UI/TestimonialItem';

export default class TestimonialsPage extends React.Component {
  render() {
    return(
      <div className="testimonials_block">
        <div className="container">
          <div className="cards">
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
            <TestimonialItem/>
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
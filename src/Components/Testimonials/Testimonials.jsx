import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonialsData = [
  {
    id: 1,
    name: 'William Jackson',
    location: 'Edusity, USA',
    message: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    image: user_1
  },
  {
    id: 2,
    name: 'Kane Mendes',
    location: 'Edusity, USA',
    message: "The environment at Edusity allowed me to grow both academically and professionally. I would recommend it to anyone looking for a high-quality education.",
    image: user_2
  },
  {
    id: 3,
    name: 'Mary Jane',
    location: 'Edusity, USA',
    message: "Edusity provides a rich learning experience with its excellent faculty and modern facilities. It's a place where I've truly thrived.",
    image: user_3
  },
  {
    id: 4,
    name: 'Jackson',
    location: 'Edusity, USA',
    message: "I have learned a lot from the dynamic programs offered here. The experience has been transformative for me, both academically and personally.",
    image: user_4
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className='testimonials'>
      <img src={back_icon} alt="Back" className='back-btn' onClick={prevSlide} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={nextSlide} />
      <div className='slider'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className='user-info'>
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.location}</span>
              </div>
            </div>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
 
import React from 'react';
import { Link } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  //TODO: Handle the state for the active link
  //TODO: Update the state on click of different link

  return (
    <div className='booking-form'>
      <div className='booking-form-header'>
        <li className='booking-form-item active'>
          <Link to='#' className='booking-form-link'>
            Build a trip
          </Link>
        </li>
        <li className='booking-form-item'>
          <Link to='#' className='booking-form-link'>
            Hotels
          </Link>
        </li>
        <li className='booking-form-item'>
          <Link to='#' className='booking-form-link'>
            Flights
          </Link>
        </li>
        <li className='booking-form-item'>
          <Link to='#' className='booking-form-link'>
            Cars
          </Link>
        </li>
        <li className='booking-form-item'>
          <Link to='#' className='booking-form-link'>
            Cruises
          </Link>
        </li>
        <li className='booking-form-item'>
          <Link to='#' className='booking-form-link'>
            Things To Do
          </Link>
        </li>
      </div>
    </div>
  );
};

export default BookingForm;

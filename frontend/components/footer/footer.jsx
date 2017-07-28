import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <div className='footer'>
    <ul className='my-info'>
      <li>Mary Howell</li>
    </ul>
    <ul className='links'>
      <li className='github'>
        <a className='personal-links' href={'https://github.com/maryhowell'}>Github</a>
      </li>
      <li>
        <a className='personal-links' href={'https://www.linkedin.com/in/mary-howell-13200067/'}>LinkedIn</a>
      </li>
    </ul>
  </div>
);

export default Footer;

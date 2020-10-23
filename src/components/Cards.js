import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Scooters!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Benling Falcon'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Benling Kriti'
              label='Luxury'
              path='/services'
            />
    
            <CardItem
              src='images/img-10.jpg'
              text='Benling Aura'
              label='Mystery'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-10.jpg'
              text='Benling Aura'
              label='Mystery'
              path='/services'
            />
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

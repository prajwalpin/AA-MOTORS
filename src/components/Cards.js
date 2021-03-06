import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Electric Scooters!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/KRITI-1.jpg'
              text='Benling Kriti'
              label='Adventure'
              path='/products'
            />
            
            <CardItem
              src='images/aura.jpg'
              text='Benling Aura'
              label='Mystery'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/falcon.jpg'
              text='Benling Falcon'
              label='Stylish'
              path='/products'
            />
           
            
          </ul>
          
          <ul className='cards__items'>
            
            <CardItem
              src='images/ICON.jpg'
              text='Benling Icon'
              label='Luxury'
              path='/products'
            />
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm/RestaurantForm';

export default function RestaurantsList({ restaurant, setRestaurant }) {
  const [nameValue, setNameValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [rangeValue, setRangeValue] = useState('');

  const deleteRestaurant = (id) => {
    setRestaurant((previousInputs) => {
      return previousInputs.filter((rest) => rest.id !== id);
    });
  };

  const updateRange = (id) => {
    setRestaurant((previousInputs) => {
      return previousInputs.map((rest) => {
        if (rest.id === id) {
          return { ...rest, range: rangeValue };
        }
        return rest;
      });
    });
  };

  return (
    <div data-testid='restaurants-list'>
      <div className='mainSection' id='addRest'>
        <h1>Explore and Add!</h1>
        <h2>
          Recommended Fried Chicken Restaurants in Baghdad with Special Deals!
        </h2>
        <RestaurantForm
          nameValue={nameValue}
          setNameValue={setNameValue}
          locationValue={locationValue}
          setLocationValue={setLocationValue}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          restaurant={restaurant}
          setRestaurant={setRestaurant}
        />
        {restaurant?.map((rest, i) => (
          <RestaurantCard
            key={i}
            rest={rest}
            deleteRestaurant={deleteRestaurant}
            updateRange={updateRange}
          />
        ))}
      </div>
    </div>
  );
}

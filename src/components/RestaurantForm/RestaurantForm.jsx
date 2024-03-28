import React from 'react';

function RestaurantForm({
  nameValue,
  setNameValue,
  locationValue,
  setLocationValue,
  rangeValue,
  setRangeValue,
  restaurant,
  setRestaurant,
}) {
  const nameChange = (event) => {
    setNameValue(event.target.value);
  };

  const locationChange = (event) => {
    setLocationValue(event.target.value);
  };

  const rangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const addRestaurant = () => {
    console.log('Adding restaurant:', nameValue, locationValue, rangeValue);

    console.log(rangeValue);
    setRestaurant((previousInputs) => [
      ...previousInputs,
      {
        id: previousInputs.length + 1,
        name: nameValue,
        location: locationValue,
        range: rangeValue,
      },
    ]);

    // Clear input fields
    setNameValue('');
    setLocationValue('');
    setRangeValue('');
  };
  return (
    <div className='grid'>
      <input
        type='text'
        value={nameValue}
        onChange={nameChange}
        placeholder='Restaurant name'
        data-testid='restaurant-name-input'
      />
      <input
        type='text'
        value={locationValue}
        onChange={locationChange}
        placeholder='Restaurant location'
        data-testid='restaurant-location-input'
      />
      <label htmlFor='range'>Rate the restaurant from 1 to 5:</label>
      <input
        type='range'
        value={rangeValue}
        onChange={rangeChange}
        data-testid='range-input'
      />
      <button className='AddButton' onClick={addRestaurant}>
        Add New Restaurant
      </button>
    </div>
  );
}

export default RestaurantForm;

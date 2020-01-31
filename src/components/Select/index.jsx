import React from 'react';
import Traveler from '../Filters/Activity';
import Activity from '../Filters/Traveler';

const Select = ({travelers, activities, key}) => {
    return (
      <div>
        <Traveler travelers={travelers} key={key} />
        <Activity activities={activities} key={key} />
      </div>    
  );
};

export default Select;
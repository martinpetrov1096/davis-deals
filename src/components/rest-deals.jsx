import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import restaurants from '../config/restaurants.json';
import Deal from './deal';
import { dealProp } from '../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function RestDeals({ deals }) {

   const dealDivs = useMemo(() => {
      return deals.map((deal) => <Deal deal={deal} key={deal.id}/>);
   }, []);


   return (
      <div>
         <h3>{restaurants.find((rest) => rest.id === deals[0]?.restaurantId).name}</h3>
         {dealDivs}
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

RestDeals.propTypes = {
   deals: PropTypes.arrayOf(dealProp)
};


import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import restaurants from '../config/restaurants.json';
import Deal from './deal';
import { dealProp } from '../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function RestDeals({ deals }) {

   const dealDivs = useMemo(() => {
      return deals.map((deal) => <Deal deal={deal} key={deal.id}/>);
   }, [deals]);

   const restaurant = useMemo(() => 
      restaurants.find((rest) => rest.id === deals[0]?.restaurantId));

   return (
      <Wrapper>
         <RestTitle>{restaurant.name}</RestTitle>
         {dealDivs}
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

RestDeals.propTypes = {
   deals: PropTypes.arrayOf(dealProp)
};

////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.div`

`;

const RestTitle = styled.h3`
   font-family: 'Marcellus SC', serif;

`;

const PhoneNumber = styled.h4`


`;

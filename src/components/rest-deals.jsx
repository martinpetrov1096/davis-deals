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
         <RestWrapper>
            <RestTitle>{restaurant.name}</RestTitle>
            <PhoneNumber>{restaurant.phone}</PhoneNumber>
         </RestWrapper>
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
   width: min(550px, 90%);
   margin-top: 40px;

   display: flex;
   flex-flow: column nowrap;
   align-items: center;

`;
const RestWrapper = styled.div`
   width: 100%;
   font-family: 'Marcellus SC', serif;
   margin-bottom: 20px;
   border-bottom: solid 1px ${({theme}) => theme.fontColor};
   padding-bottom: 5px;

   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: space-between;


`;


const RestTitle = styled.h3`
   font-size: min(30px, 5vw);
`;

const PhoneNumber = styled.h4`
   font-size: min(15px, 3.5vw);
`;

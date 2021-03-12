import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestDeals from './rest-deals';
import { dealProp } from '../utils/prop-types';
import days from '../config/days.json';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

/**
 * This component will hold all of the deals that
 * correspond to @day 
 * @param { string } day The day of the week
 * @param {deals } dealProp[] An array of deals for 
 * that day
 */
export default function DailyDeals({ day, deals }) {

   /**
    * @dealsByRestDivs stores an array of RestDeal
    * divs, each mapping to a restaurant that has
    * a deal for the day corresponding to @day
    */
   const dealsByRestDivs = useMemo(() => {
      const restDeals = {};
      for (const deal of deals) {
         if (restDeals[deal.restaurantId] == undefined) {
            restDeals[deal.restaurantId] = [deal];
         } else {
            restDeals[deal.restaurantId].push(deal);
         }
      }
      const restDealDivs = [];
      for (const restId in restDeals) {
         restDealDivs.push(<RestDeals key={restId} deals={restDeals[restId]}/>);
      }
      return restDealDivs;
   }, [deals]);

   const dayName = useMemo(() => {
      const today = new Date().getDay();
      if (days.indexOf(day) === today)
         return 'today';
      else if (days.indexOf(day) - 1 === today) 
         return 'tomorrow';
      else 
         return day;
   }, [day]);

   return (
      <Wrapper>
         <DayTitle>{dayName + '\'s Deals'}</DayTitle>
         { dealsByRestDivs }
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

DailyDeals.propTypes = {
   day: PropTypes.string,
   deals: PropTypes.arrayOf(dealProp)
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   width: 100%;
   margin: 300px 0;

   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`;

const DayTitle = styled.h2`
   margin-bottom: 30px;
   font-size: min(120px, 15vw);
   font-family: 'Baskervville', serif;
   text-transform: capitalize;
   text-align: center;
`;
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import RestDeals from './rest-deals';
import { dealProp } from '../utils/prop-types';


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
   }, []);


   return (
      <div>
         <h2>{day}</h2>
         { dealsByRestDivs }
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

DailyDeals.propTypes = {
   day: PropTypes.string,
   deals: PropTypes.arrayOf(dealProp)
};
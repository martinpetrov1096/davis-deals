import React, { useMemo } from 'react';
import deals from './config/deals.json';
import days from './config/days.json';
import DailyDeals from './components/daily-deals';


export default function App() {

   const dailyDealDivs = useMemo(() => {
      const dailyDeals = {};
      for (const day of days) {
         dailyDeals[day.toString()] = deals.filter((deal) => deal.day.includes(day));
      }
      return days.map((day) => {
         return (
            <DailyDeals day={day} deals={dailyDeals[day]} key={day}/>
         );
      });
   }, []);

   return (
      <div className="App">
         { dailyDealDivs }
      </div>
   );
}

/**
 * 
 * monday: [
 *  nums.map((num) => return num * num);
 * 
  * ],
  * "tuesday" : 
 * 
 */
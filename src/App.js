import React, { useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import deals from './config/deals.json';
import days from './config/days.json';
import theme from './config/themes.json';
import DailyDeals from './components/daily-deals';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function App() {

   const [category, setCategory] = useState('food');

   /**
    * @dailyDealDivs is an array of DailyDiv components that each
    * have the appropriate deals for each day
    */
   let dailyDealDivs = useMemo(() => {
      const today = new Date().getDay();
      const sortedDays = days.slice(today).concat(days.slice(0, today));

      const dailyDeals = {};
      for (const day of sortedDays) {
         dailyDeals[day] = deals.filter((deal) => (deal.day.includes(day) && deal.category === category));
      }
      console.log(dailyDeals['monday']);
      return sortedDays.map((day) => <DailyDeals day={day} deals={dailyDeals[day]} key={day}/>);
   }, [category]);


   return (
      <ThemeProvider theme={theme[category]}>
         <Wrapper>
            { dailyDealDivs }
            <input type="radio" value="food" name="category" checked={category === 'food'} onChange={(e) => setCategory(e.target.value)} />
            <input type="radio" value="drink" name="category" checked={category === 'drink'} onChange={(e) => setCategory(e.target.value)}/>  
         </Wrapper>
      </ThemeProvider>
   );
}
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   width: 100%;
   height: max(auto, 100vh);
   background-color: ${({theme}) => theme.backgroundColor};
   transition: all .5s ease-in-out;
   color: ${({theme}) => theme.fontColor};

   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;

`;
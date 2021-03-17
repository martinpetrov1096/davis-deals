import React, { useCallback, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import deals from './config/deals.json';
import days from './config/days.json';
import theme from './config/themes.json';
import DailyDeals from './components/daily-deals';
import Logo from './components/title';
import CategorySlider from './components/category-slider';
import ScrollTopBtn from './components/scroll-top-btn';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function App() {

   const [category, setCategory] = useState('food');

   /**
    * @dailyDealDivs is an array of DailyDiv components that each
    * have the appropriate deals for each day
    */
   const dailyDealDivs = useMemo(() => {
      const today = new Date().getDay();
      const sortedDays = days.slice(today).concat(days.slice(0, today));

      const dailyDeals = {};
      for (const day of sortedDays) {
         dailyDeals[day] = deals.filter((deal) => (deal.day.includes(day) && deal.category === category));
      }
      return sortedDays.map((day) => <DailyDeals day={day} deals={dailyDeals[day]} key={day}/>);
   }, [category]);

   const changeCategory = useCallback((newCategory) => {
      if (newCategory !== 'drink' && newCategory !== 'food') return;
      setCategory(newCategory);
   });


   return (
      <ThemeProvider theme={theme[category]}>
         <Wrapper>
            <Logo category={category}/>
            <CategorySlider changeCategory={changeCategory} category={category}/>
            { dailyDealDivs }
         </Wrapper>
         <ScrollTopBtn category={category}/>
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
   transition: ${({theme}) => theme.transition};
   color: ${({theme}) => theme.fontColor};
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
`;
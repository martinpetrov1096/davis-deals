import React, { useCallback, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import deals from './config/deals.json';
import days from './config/days.json';
import theme from './config/themes.json';
import DailyDeals from './components/daily-deals';
import Logo from './components/logo';
import CategorySlider from './components/category-slider';

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

      if (newCategory !== 'drink' && newCategory !== 'food') 
         return;

      setCategory(newCategory);
   });




   return (
      <ThemeProvider theme={theme[category]}>
         <Wrapper>
            <Logo category={category}/>
            <CategorySlider changeCategory={changeCategory} category={category}/>
            {/* <Button checked={category === 'drink'} onChange={(drink) => drink ? setCategory('drink') : setCategory('food') }/> */}
            { dailyDealDivs }
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
   transition: ${({theme}) => theme.transition};
   color: ${({theme}) => theme.fontColor};

   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
`;

// const Button = styled(Switch).attrs(props => ({
//    checkedIcon: false,
//    uncheckedIcon: false,
//    // boxShadow: '0 4px 4px #000000',
//    offColor: props.theme.buttonBg,
//    onColor: props.theme.buttonBg,
//    offHandleColor: props.theme.fontColor,
//    onHandleColor: props.theme.fontColor,
//    width: 50,
//    height: 22,
//    handleDiameter: 26
// }))`
//    margin: 40px 0;
//    padding: 0;

//    > .react-switch-bg {
//       /* box-shadow: inset 0 2px 2px #000000; */
//    }

// `;
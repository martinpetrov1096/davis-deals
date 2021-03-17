import React from 'react';
import { dealProp } from '../utils/prop-types';
import styled from 'styled-components';
import { useMemo } from 'react';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Deal({ deal }) {

   const stars = useMemo(() => {
      const starSpans = [];
      for (let i = 0; i < deal.value; ++i) {
         starSpans.push(<span>&#9733;</span>);
      }
      return starSpans;
   });


   return (
      <Wrapper>
         <Description>{deal.description}</Description>
         <TimePriceWrapper>
            <SmallDetails>{deal.timeStart + ' - ' + deal.timeEnd}</SmallDetails>
            <SmallDetails>{deal.price}</SmallDetails>
         </TimePriceWrapper>

      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////
Deal.propTypes = {
   deal: dealProp
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.div`
   width: 90%;
   margin: 10px 0;
   font-family: 'Marcellus', serif;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   align-items: center;
   transition: background-color .2s linear;
`;
const Description = styled.h4`
   font-size: min(18px, 3.5vw);
   line-height: 1.3;
`;
const TimePriceWrapper = styled.div`
   margin-left: 20px;
   flex: 0 0 calc(min(20vw, 100px));
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`;
const SmallDetails = styled.h5`
   margin: 5px 0;
   font-size: min(14px, 3.0vw);
`;
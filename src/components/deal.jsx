import React from 'react';
import { dealProp } from '../utils/prop-types';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Deal({ deal }) {


   return (
      <Wrapper>
         <Time>{deal.timeStart + '-' + deal.timeEnd}</Time>
         <Description>{deal.description}</Description>
         <Price>{deal.price}</Price>
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
`;
const Time = styled.h4`
   flex-shrink: 0;
   flex-grow: 0;
   width: 75px;
   margin-right: 5px;
   font-size: min(14px, 3vw);
`;
const Description = styled.h4`
   font-size: min(18px, 4vw);
   text-align: center;
   line-height: 1.3;
`;
const Price = styled.h4`
   margin-left: 5px;
   font-size: min(18px, 4vw);
`;
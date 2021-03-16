import React from 'react';
import { dealProp } from '../utils/prop-types';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Deal({ deal }) {


   return (
      <Wrapper>
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
const Description = styled.h4`
   font-size: min(18px, 4vw);
`;
const Price = styled.h4`
   font-size: min(18px, 4vw);
`;
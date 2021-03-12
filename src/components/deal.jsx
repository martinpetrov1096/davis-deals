import React from 'react';
import { dealProp } from '../utils/prop-types';
import styled from 'styled-components';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Deal({ deal }) {


   return (
      <div>
         <h4>{deal.description}</h4>
      </div>
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
const Wapper = styled.div`

`;
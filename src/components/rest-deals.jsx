import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import restaurants from '../config/restaurants.json';
import Deal from './deal';
import { dealProp } from '../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function RestDeals({ deals }) {

   const dealDivs = useMemo(() => {
      return deals.map((deal) => <Deal deal={deal} key={deal.id}/>);
   }, [deals]);

   const restaurant = useMemo(() => 
      restaurants.find((rest) => rest.id === deals[0]?.restaurantId));


   return (
      <Wrapper>
         <RestWrapper>
            <RestTitle>{restaurant.name}</RestTitle>
            <AboutWrapper>
               <Link href={'tel:'+ restaurant.phone}>
                  <PhoneNumber >{restaurant.phone}</PhoneNumber>
               </Link>
               <Link href={restaurant.url} target="_blank" rel="noopener noreferrer">
                  <RestLocSVG light={deals[0].category === 'food'}  width="119" height="161" viewBox="0 0 119 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="60" cy="58" r="44" className="fill"/>
                     <path d="M60.0001 148L98 80H22L60.0001 148Z" className="fill"/>
                     <circle cx="60" cy="58" r="20" className="fillOpposite"/>
                  </RestLocSVG>
               </Link>
            </AboutWrapper>

         </RestWrapper>
         {dealDivs}
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

RestDeals.propTypes = {
   deals: PropTypes.arrayOf(dealProp)
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.div`
   width: min(600px, 90%);
   margin-top: 40px;
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`;
const RestWrapper = styled.div`
   width: 100%;
   font-family: 'Marcellus SC', serif;
   margin-bottom: 20px;
   border-bottom: solid 1px ${({theme}) => theme.fontColor};
   padding-bottom: 5px;
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: space-between;
`;
const RestTitle = styled.h3`
   font-size: min(30px, 5vw);
`;
const Link = styled.a`
   color: ${({theme}) => theme.fontColor};
   text-decoration: none;
   :hover {
      color: #90a4ae;
      .fill {
         transition: none;
         fill: #90a4ae;
      }
   }
`;
const AboutWrapper = styled.div`
   display: flex;
   flex-flow: row nowrap;
   justify-content: flex-end;
   align-items: center;
`;

const PhoneNumber = styled.h4`
   margin-right: 10px;
   font-size: min(15px, 3.5vw);
   
`;
const RestLocSVG = styled.svg`
   width: 30px;
   height: 30px;
   > .fill {
      transition: ${({theme}) => theme.transition};
      fill: ${({light}) => light ? 'black' : 'white'};
   }
   > .fillOpposite {
      transition: ${({theme}) => theme.transition};
      fill: ${({light}) => light ? 'white' : 'black'};
   }
   :hover {
      .fill {
         transition: none;
         fill: #90a4ae;
      }
   }
`;
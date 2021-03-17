import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function ScrollTopBtn({ category }) {

   const [hidden, setHidden] = useState(false);



   const scrollHome = useCallback(() => {
      document.getElementById('title').scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   }, []);
   const checkHidden = () => {
      if (window.pageYOffset > 300 && hidden) {
         setHidden(() => false);
      } else if (window.pageYOffset <= 300 && !hidden) {
         setHidden((prevVal) => true);
      }
   };
   useEffect(() => {
      window.addEventListener('scroll', checkHidden);
      return () => window.removeEventListener('scroll', checkHidden);
   });


   return (
      <ScrollBtn onClick={() => scrollHome()} light={category === 'food'} hidden={hidden} width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="60" cy="60" r="60" className="fill"/>
         <path d="M59.5 47.125L37.7537 70L36 67.75L59.5 43L83 67.75L80.8955 70L59.5 47.125Z" fill="white" className="strokeOpposite" strokeWidth="4"/>
      </ScrollBtn>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

ScrollTopBtn.propTypes = {
   category: PropTypes.string
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const slideUp = keyframes`
   from {
      transform: translateY(100px);
   }
`;

const ScrollBtn = styled.svg`
   position: fixed;
   bottom: 40px;
   right: 40px;
   width: 75px;
   height: 75px;
   border-radius: 100%;
   display: ${({hidden}) => hidden ? 'none' : 'block'};
   animation: ${slideUp} .3s ease-out;
   cursor: pointer;

   > .fill {
      transition: ${({theme}) => theme.transition};
      fill: ${({light}) => light ? 'black' : 'white'};
   }
   > .strokeOpposite {
      transition: ${({theme}) => theme.transition};
      stroke: ${({light}) => light ? 'white' : 'black'};
      fill: none;
   }
   transition: all .2s ease-in-out;
   :hover {
      transform: scale(1.05);
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

   }

   @media screen and (max-width: 400px) { 
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
   }
`;


import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function CategorySlider({ changeCategory, category }) {


   return (
      <Wrapper>
         <IconSVG light={category === 'food'} width="102" height="102" viewBox="0 0 102 102">
            <path d="M99.8575 29H2.13536C3.0026 22.5768 8.01759 16.0387 16.3063 10.9316C25.0137 5.56642 37.0262 2 50.4742 2C63.9243 2 76.1981 5.56762 85.1725 10.9445C93.723 16.0674 98.9493 22.6073 99.8575 29Z" className="fill" strokeWidth="4"/>
            <rect y="83" width="102" height="10" rx="1" className="fill" strokeWidth="4"/>
            <rect x="6" y="62" width="89" height="14" rx="4" className="fill"/>
            <rect x="6" y="36" width="89" height="14" rx="4" className="fill"/>
            <circle cx="51" cy="19" r="2" className="fillOpposite"/>
            <circle cx="42" cy="12" r="2" className="fillOpposite"/>
            <circle cx="61" cy="12" r="2" className="fillOpposite"/>
            <circle cx="32" cy="19" r="2" className="fillOpposite"/>
            <circle cx="70" cy="19" r="2" className="fillOpposite"/>
            <path d="M50.5 71L89.0381 41H11.9619L50.5 71Z" className="fillOpposite"/>
         </IconSVG>
         <Toggle checked={category === 'drink'} onChange={(drink) => drink ? changeCategory('drink') : changeCategory('food') }/>
         <IconSVG light={category === 'food'} width="102" height="102" viewBox="0 0 102 102">
            <path d="M51 63L102 22H0L51 63Z" className="fill"/>
            <path d="M51 63L96 27H6L51 63Z" className="fillOpposite"/>
            <path d="M51 63L89.1051 32.25H12.8949L51 63Z" className="fill"/>
            <path d="M51 58V100" className="stroke" strokeWidth="4"/>
            <line x1="38.4856" y1="42.8854" x2="17.0441" y2="1.06121" className="stroke" strokeWidth="2"/>
            <circle cx="17" cy="1" r="1" className="fill"/>
            <ellipse cx="23" cy="12.5" rx="4" ry="4.5" className="fill"/>
            <rect x="29" y="96" width="44" height="4" rx="1" className="fill"/>
         </IconSVG>
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

CategorySlider.propTypes = {
   changeCategory: PropTypes.func,
   category: PropTypes.string
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.div`
   width: min(90%, 150px);

   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   justify-content: space-between;
`;


const Toggle = styled(Switch).attrs(props => ({
   checkedIcon: false,
   uncheckedIcon: false,
   offColor: props.theme.buttonBg,
   onColor: props.theme.buttonBg,
   offHandleColor: props.theme.fontColor,
   onHandleColor: props.theme.fontColor,
   width: 50,
   height: 22,
   handleDiameter: 26
}))`
   margin: 40px 0;
   padding: 0;
`;
const IconSVG = styled.svg`
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
   > .stroke {
      transition: ${({theme}) => theme.transition};
      stroke: ${({light}) => light ? 'black' : 'white'};
      fill: none;
   }
   > .strokeOpposite {
      transition: ${({theme}) => theme.transition};
      stroke: ${({light}) => light ? 'white' : 'black'};
      fill: none;
   }

`;

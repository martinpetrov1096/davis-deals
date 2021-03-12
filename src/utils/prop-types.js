import { shape, number, string, arrayOf } from 'prop-types';

/**
 * Price, timeStart and timeEnd
 * are allowed to be missing
 */
export const dealProp = shape({
   id: number.isRequired,
   restaurantId: number.isRequired,
   day: arrayOf(string).isRequired,
   category: string.isRequired,
   description: string.isRequired,
   price: string,
   timeStart: string,
   timeEnd: string
});

/**
 * Phone number and url will be optional,
 * since some places might not have those
 */
export const restaurantProp = shape({
   id: number.isRequired,
   name: string.isRequired,
   phone: string,
   url: string
});
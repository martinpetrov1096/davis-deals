import restaurants from '../config/restaurants.json';

export default function Deal({deal}) {


   return (
      <div>
         
         <h3>{restaurants.find(rest => rest.id === deal.restaurantId)?.name}</h3>
         <h4> {deal.description}  </h4>
      </div>
   );

}
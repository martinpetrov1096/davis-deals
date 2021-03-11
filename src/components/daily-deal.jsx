import { useCallback } from 'react';
import Deal from './rest-deal';



export default function DailyDeal({ day, deals }) {


   const dealsByRest = useCallback(() => {

      return deals.reduce(acc, deal)


   });


   return (

      <div>
         <h2>{day}</h2>
         {
            deals.map((deal) => <Deal deal={deal} key={deal.id}/>)

         }
      </div>

   );
}
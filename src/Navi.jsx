//import { useState } from "react";

function Navi(props) {
   let naviData = [
      { category: 'Smileys Emotion', value: 'Smileys' },
      { category: 'People & Body', value: 'People' },
      { category: 'Animals & Nature', value: 'Animals' },
      { category: 'Food & Drink', value: 'Food' }
   ];

  // const [nav, setNav] = useState("");

   /*const handleNav = (e) => {
      console.log(e);
      setNav(e);
   }

*/
   return (
      <div className="navidata">
         {naviData.map((n) => {
            return <p  key={n.category}>{n.value}</p>
         })}
      </div>
   )
 }



export default Navi;
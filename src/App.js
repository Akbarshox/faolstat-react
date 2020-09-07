import React from 'react';
import Header from "./Dashboard/Header";
import Cards from './Dashboard/Cards';
import WhatIs from "./Dashboard/WhatIs";

function App() {
   return (
      <div>
         <div id='main'>
            <Header/>
         </div>
         <div id='about'>
            <WhatIs/>
         </div>
         <div id='tarif'>
            <Cards/>
         </div>
      </div>
   );
}

export default App;

import React from 'react';
import Header from "./Dashboard/Header";
import Cards from './Dashboard/Cards';
import WhatIs from "./Dashboard/WhatIs";

function App() {
   return (
      <div className="App">
         <Header />
         <WhatIs />
         <Cards />
      </div>
   );
}

export default App;

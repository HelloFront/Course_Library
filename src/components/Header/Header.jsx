import React from 'react';
import Nav from './Nav';

const Header = () => {
  return ( 
   <header>
      <div className="bg_block"></div>
      <div className="container">
        <Nav/>
        <div className="text_center">
          <h1><strong>Центр</strong> учебных <strong>пособий</strong></h1>
        </div>
      </div>
   </header>
   );
}
 
export default Header;
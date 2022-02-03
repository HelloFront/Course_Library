import React from 'react';
import logo from './img/logo.svg';


const Nav = () => {
  return ( 
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <div className="nav_links">
        <ul>
          <li>Главная</li>
          <li>Учебники</li>
          <li>Озывы</li>
          <li>Блог</li>
          <li>Об нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Nav;
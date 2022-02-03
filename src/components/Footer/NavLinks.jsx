import React from 'react';


const NavLinks = (props) => {
  const { title } = props;

  return ( 
    <div className='nav_links'>
      <p className="title">{title}</p>
      <ul>
        <li><a href="">Об нас</a></li>
        <li><a href="">Отзывы</a></li>
        <li><a href="">Услуги</a></li>
        <li><a href="">Конфиденциальность</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
    </div>
   );
}
 
export default NavLinks;
import React from 'react';
import gitHubIcon from './img/github.svg';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return ( 
    <footer>
      <div className="container">
        <div className="footer_inner_block">
          <div className="footer_info">
            <div className="footer_info_left_side">
              <p className="title">Об нас</p>
              <p className="info">
                Далеко-далеко, за словесными горами, вдали от стран Вокалии и Консонантии,
                живут слепые тексты.
              </p>
              <SocialLinks/>
            </div>
            <div className="footer_info_right_side">
              <NavLinks title='Быстрые ссылки'/>
              <NavLinks title='Ресурсы'/>
              <NavLinks title='Поддержка'/>
              <NavLinks title='Компания'/>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright ©2022 All rights reserved | This page is made this person</p>
            <img src={gitHubIcon} alt="gitHub_icon" />
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;
import React from 'react';
import icon_tutorial1 from '../img/icon_tutorial1.webp';
import icon_tutorial2 from '../img/icon_tutorial2.webp';
import icon_tutorial3 from '../img/icon_tutorial3.webp';

const Aside = () => {
  return ( 
    <div className="popular_right_block">
      <div className="card">
        <img src={icon_tutorial1} alt="icon" />
        <div>
          <p className="type">Tutorial</p>
          <p className="description">Learning React Native</p>
        </div>
      </div>
      <div className="card">
        <img src={icon_tutorial2} alt="icon" />
        <div>
          <p className="type">Tutorial</p>
          <p className="description">Learning React Native</p>
        </div>
      </div>
      <div className="card">
        <img src={icon_tutorial3} alt="icon" />
        <div>
          <p className="type">Tutorial</p>
          <p className="description">Learning React Native</p>
        </div>
      </div>
    </div>
   );
}
 
export default Aside;
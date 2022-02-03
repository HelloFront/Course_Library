import React from 'react';
import imgTutorial from '../img/icon_tutorial.jpg';
import jsIcon from '../img/js_logo.svg';
import reactIcon from '../img/react_logo.svg';


const PopularTutorial = () => {
  return ( 
    <div className="popular_left_block">
      <img className='img_tutorial' src={imgTutorial} alt="icon_pc"/>
      <div className="description_tutorial">
        <p className="type">Tutorial</p>
        <p className="name_tutorial">Learning React Native</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Harum quidem totam exercitationem eveniet blanditiis nulla, 
          et possimus, itaque alias maxime!
        </p>
        <div className="icons_lang">
          <img src={reactIcon} alt="icon" />
          <img src={jsIcon} alt="icon" />
        </div>
        <p className="sub_text">
          <span>1hr 24m</span>
          <span>Advanced</span>
          <span>Jun 18, 2020</span>
        </p>
      </div>
    </div>
   );
}
 
export default PopularTutorial;
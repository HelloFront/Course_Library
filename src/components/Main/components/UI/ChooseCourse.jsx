import React from 'react';
import illustratorIcon from './img/illustrator_icon.svg';
import photoshopIcon from './img/photoshop_icon.svg';
import angularIcon from './img/angular_icon.svg';
import jsIcon from '../Home/img/js_logo.svg';
import reactIcon from '../Home/img/react_logo.svg';
import vueIcon from './img/vue_icon.svg';


class ChooseCourse extends React.Component {
  render() {
    return(
      <div className='chooseCourse_block'>
        <div className="description">
          <h5>TUTORIAL COURSES</h5>
          <h3>Choose Course</h3>
        </div>
        <div className="block_courses">
          <div className="item_course">
            <img src={illustratorIcon} alt="illustratorIcon" />
            <p className="name_course">Illustrator</p>
          </div>
          <div className="item_course">
            <img src={photoshopIcon} alt="photoshopIcon" />
            <p className="name_course">Photoshop</p>
          </div>
          <div className="item_course">
            <img className='angularIcon' src={angularIcon} alt="angularIcon" />
            <p className="name_course angular">Angular</p>
          </div>
          <div className="item_course">
            <img src={jsIcon} alt="jsIcon" />
            <p className="name_course">JavaScript</p>
          </div>
          <div className="item_course">
            <img src={reactIcon} alt="reactIcon" />
            <p className="name_course">React</p>
          </div>
          <div className="item_course">
            <img src={vueIcon} alt="vueIcon" />
            <p className="name_course">Vue</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseCourse;
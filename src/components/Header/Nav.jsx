import React from 'react';
import logo from './img/logo.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends React.Component {

  render() {
    
    return ( 
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <div className="nav_links">
          <ul>
            <li><NavLink 
              className='link'
              activeClassName='link active' 
              to='/Course_Library/' 
            >Главная</NavLink></li>
            <li><NavLink 
              className='link'
              activeClassName='link active' 
              to='/tutorials' 
            >Учебники</NavLink></li>
            <li><NavLink 
              className='link'
              activeClassName='link active'  
              to='/testimonials'  
            >Отзывы</NavLink></li>
            <li><NavLink 
              className='link'
              activeClassName='link active'  
              to='/blog' 
            >Блог</NavLink></li>
            <li><NavLink 
              className='link'
              activeClassName='link active'  
              to='/about' 
            >Об нас</NavLink></li>
            <li><NavLink 
              className='link'
              activeClassName='link active' 
              to='/contact' 
            >Контакты</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Nav);
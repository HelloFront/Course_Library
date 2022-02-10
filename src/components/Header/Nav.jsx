import React from 'react';
import logo from './img/logo.svg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Nav extends React.Component {
  componentDidMount() {
    this.setState({activePage: this.props.location.pathname})
  }

  render() {
    const { pathname } = this.props.location
    
    return ( 
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <div className="nav_links">
          <ul>
            <li><Link 
              className={pathname === '/Course_Library/' ? 'link active' : 'link'} 
              to='/Course_Library/' 
            >Главная</Link></li>
            <li><Link 
              className={pathname === '/Course_Library/tutorials' ? 'link active' : 'link'} 
              to='/Course_Library/tutorials' 
            >Учебники</Link></li>
            <li><Link 
              className={pathname === '/Course_Library/testimonials' ? 'link active' : 'link'} 
              to='/Course_Library/testimonials'  
            >Отзывы</Link></li>
            <li><Link 
              className={pathname === '/Course_Library/blog' ? 'link active' : 'link'}  
              to='/Course_Library/blog' 
            >Блог</Link></li>
            <li><Link 
              className={pathname === '/Course_Library/about' ? 'link active' : 'link'} 
              to='/Course_Library/about' 
            >Об нас</Link></li>
            <li><Link 
              className={pathname === '/Course_Library/contact' ? 'link active' : 'link'} 
              to='/Course_Library/contact' 
            >Контакты</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const withRouterComponent = withRouter(Nav)
export default connect(mapStateToProps)(withRouterComponent);
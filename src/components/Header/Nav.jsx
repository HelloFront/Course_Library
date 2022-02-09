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
            <li><Link className={pathname === '/' ? 'link active' : 'link'} to='/' >Главная</Link></li>
            <li><Link className={pathname === '/tutorials' ? 'link active' : 'link'} to='/tutorials' >Учебники</Link></li>
            <li><Link className={pathname === '/testimonials' ? 'link active' : 'link'} to='/testimonials'  >Отзывы</Link></li>
            <li><Link className={pathname === '/blog' ? 'link active' : 'link'}  to='/blog' >Блог</Link></li>
            <li><Link className={pathname === '/about' ? 'link active' : 'link'} to='/about' >Об нас</Link></li>
            <li><Link className={pathname === '/contact' ? 'link active' : 'link'} to='/contact' >Контакты</Link></li>
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
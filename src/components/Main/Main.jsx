import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Tutorials from './Tutorials/Tutorials';
import About from './About/About';
import Blog from './Blog/Blog';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Main = () => {
  return ( 
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/tutorials' component={Tutorials}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/testimonials' component={Testimonials}/>
      </Switch>
    </main>
   );
}
 
export default Main;


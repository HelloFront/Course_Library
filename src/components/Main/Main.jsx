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
        <Route exact path='/Course_Library/' component={Home}/>
        <Route path='/Course_Library/tutorials' component={Tutorials}/>
        <Route path='/Course_Library/about' component={About}/>
        <Route path='/Course_Library/blog' component={Blog}/>
        <Route path='/Course_Library/contact' component={Contact}/>
        <Route path='/Course_Library/testimonials' component={Testimonials}/>
      </Switch>
    </main>
   );
}
 
export default Main;


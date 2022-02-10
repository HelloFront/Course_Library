import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tutorials from './components/Tutorials/Tutorials';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const Main = () => {
  return ( 
    <main>
      <Switch>
        <Route exact path='/Course_Library' component={Home}/>
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


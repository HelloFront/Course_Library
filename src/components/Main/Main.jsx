import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import TutorialsPage from './components/Tutorials/Tutorials';
import AboutPage from './components/About/About';
import BlogPage from './components/Blog/Blog';
import TestimonialsPage from './components/Testimonials/Testimonials';
import ContactPage from './components/Contact/Contact';

const Main = () => {
  return ( 
    <main>
      <Switch>
        <Route exact path='/Course_Library/' component={HomePage}/>
        <Route path='/Course_Library/tutorials' component={TutorialsPage}/>
        <Route path='/Course_Library/about' component={AboutPage}/>
        <Route path='/Course_Library/blog' component={BlogPage}/>
        <Route path='/Course_Library/contact' component={ContactPage}/>
        <Route path='/Course_Library/testimonials' component={TestimonialsPage}/>
      </Switch>
    </main>
   );
}
 
export default Main;


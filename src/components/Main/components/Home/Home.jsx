import React from 'react';
import ChooseCourse from '../UI/ChooseCourse';
import Testimonials from '../UI/Tastimonials';
import Tutorials from '../UI/Tutorials';
import TopBlockTutorials from './components/TopBlockTutorials';


export default class HomePage extends React.Component {
  render() {
    return(
      <>
       <TopBlockTutorials />
       <ChooseCourse />
       <Tutorials/>
       <Testimonials/>
      </>
    )
  }
}
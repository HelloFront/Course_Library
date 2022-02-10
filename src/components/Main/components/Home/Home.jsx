import React from 'react';
import ChooseCourse from '../UI/ChooseCourse';
import Tutorials from '../UI/Tutorials';
import TopBlockTutorials from './components/TopBlockTutorials';


export default class Home extends React.Component {
  render() {
    return(
      <>
       <TopBlockTutorials />
       <ChooseCourse />
       <Tutorials/>
      </>
    )
  }
}
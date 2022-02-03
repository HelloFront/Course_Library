import React from 'react';
import Aside from './Aside';
import PopularTutorial from './PopularTutorial';

const TopBlockTutorials = () => {
  return ( 
    <div className="popular_tutorial">
      <div className="container">
        <div className="inner_block">
          <PopularTutorial/>
          <Aside/>
        </div>
      </div>
    </div>
   );
}
 
export default TopBlockTutorials;
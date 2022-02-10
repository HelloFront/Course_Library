import 'normalize.css';
import './App.scss';
import './components/Main/components/UI/styles/chooseCourse.scss'
import './components/Main/components/UI/styles/tutorials.scss'
import './components/Main/components/UI/styles/testimonialItem.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

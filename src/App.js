import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/projects' element={ <Projects/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import Portfolio from './components/Portfolio.js';
import About from './components/About';
import Icons from './components/Icons';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Portfolio/>
    <About/>  
    <Icons/>
    <Contact/>
    </>
  );
}

export default App;

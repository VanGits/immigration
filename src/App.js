
import './App.css';
import Nav from "./components/Nav.jsx"
import Landing from "./components/Landing.jsx"
import Testimonials from './components/Testimonials';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Testimonials/>
      <Featured/>
      <Footer/>
      
    </div>
  );
}

export default App;

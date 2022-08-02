
import './App.css';
import Nav from "./components/Nav.jsx"
import Landing from "./components/Landing.jsx"
import Testimonials from './components/Testimonials';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Testimonials/>
      <Featured/>
      
    </div>
  );
}

export default App;

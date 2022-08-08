import "./App.css";
import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import Testimonials from "./components/Testimonials";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AboutMain from "./components/AboutMain";
import AboutSub from "./components/AboutSub";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <Nav />,
              <Landing />,
              <Testimonials />,
              <Featured />,
              <Footer />,
            ]}
          />
          <Route
            path="/about-lakbay"
            element={[
              <Nav />,
              <AboutMain/>,
              <AboutSub/>,
              <Featured />,
              <Footer />,
            ]}
          />
          <Route
            path="/newsletter"
            element={[
              <Nav />,
           
            ]}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

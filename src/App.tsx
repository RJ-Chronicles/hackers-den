import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
};

export default App;

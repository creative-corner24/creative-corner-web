import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcompo from './Components/Navbarcompo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Containers/Home/home';
import About from'./Containers/About/about';
import Services from './Containers/Services/services';
import Ourteam from './Containers/Ourteam/ourteam';
import Contact from './Containers/Contact/contact';
function App() {
  return (
      <>
  
    <BrowserRouter>
    <Navbarcompo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/our-team" element={<Ourteam/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;

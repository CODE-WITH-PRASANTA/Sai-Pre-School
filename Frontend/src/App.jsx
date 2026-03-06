import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Classes from "./Pages/Classes/Classes";
import Teacher from "./Pages/Teacher/Teacher";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Testimonials from "./Components/Testimonial/Testimonial";
import Events from "./Pages/Events/Events";
import OurGallery from "./Pages/OurGallery/OurGallery";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teachers" element={<Teacher />} />
        <Route path="/test" element={<Testimonials />} />
        <Route path="/Classes" element={<Classes />} />
      <Route path="/events" element={<Events/>}/>
      <Route path="/gallery" element={<OurGallery/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

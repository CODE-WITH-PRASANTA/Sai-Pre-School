import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Classes from "./Pages/Classes/Classes";
import Events from "./Pages/Events/Events";
import Teacher from "./Pages/Teacher/Teacher";
import OurGallery from "./Pages/OurGallery/OurGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/gallery" element={<OurGallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

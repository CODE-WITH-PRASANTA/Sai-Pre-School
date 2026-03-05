import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Classes from "./Pages/Classes/Classes";
import Teacher from "./Pages/Teacher/Teacher";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Testimonials from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/Classes" element={<Classes/>}/>
          <Route path="/Teachers" element={<Teacher/>}/>
        </Routes>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Testimonials />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
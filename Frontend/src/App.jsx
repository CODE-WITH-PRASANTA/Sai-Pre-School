import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
// import Testimonials from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/test" element={<Testimonials />} /> */}
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
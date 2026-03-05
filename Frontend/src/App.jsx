import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
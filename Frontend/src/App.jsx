import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Classes from "./Pages/Classes/Classes";
import Teacher from "./Pages/Teacher/Teacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/Classes" element={<Classes/>}/>
          <Route path="/Teachers" element={<Teacher/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
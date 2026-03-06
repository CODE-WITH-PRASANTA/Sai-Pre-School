import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AppLayout/AdminLayout";

import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminNewsPost from "./Pages/News/AdminNewsPost";
import AdminEventPost from "./Pages/AdminEventPost/AdminEventPost";

import News from "./Pages/News/News";
import Classes from "./Pages/Classes/Classes";
// import Gallery from "./Pages/Gallery/Gallery";
// import Events from "./Pages/Events/Events";
// import Classes from "./Pages/Classes/Classes";
// import Teachers from "./Pages/Teachers/Teachers";

import Testimonial from "./Pages/Testimonial/Testimonial";
import Contact from "./Pages/Contact/Contact";
import GalleryPost from "./Pages/GalleryPost/GalleryPost";
import GalleryView from "./Pages/GalleryView/GalleryView";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Admin Layout Wrapper */}
        <Route element={<AdminLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/admin/news" element={<AdminNewsPost />} />

          <Route path="/admin/event" element={<AdminEventPost />} />

          {/* <Route path="/admin/gallery" element={<Gallery />} /> */}
          <Route path="/admin/news" element={<News />} />
          <Route path="/admin/gallery-post" element={<GalleryPost/>} />
          <Route path="/admin/gallery-view" element={<GalleryView/>} />
          {/* <Route path="/admin/events" element={<Events />} /> */}
           <Route path="/admin/classes" element={<Classes/>} /> 
<<<<<<< HEAD
           <Route path="/admin/Contact" element={<Contact/>} /> 
          {<Route path="/admin/testimonials" element={<Testimonial />} />}
=======
          {/* <Route path="/admin/teachers" element={<Teachers />} /> */}
<<<<<<< HEAD

=======
>>>>>>> b4bdca312009debbf726532c01b50f1bf07b8a15
          <Route path="/admin/testimonials" element={<Testimonial />} />
>>>>>>> 3ce001de7eabc339170ecc4f45944aed0e75d0d9

        </Route>

      </Routes>

    </BrowserRouter>
  );
}
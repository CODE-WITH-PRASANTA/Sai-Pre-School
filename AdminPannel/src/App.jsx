import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AppLayout/AdminLayout";

import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminNewsPost from "./Pages/News/AdminNewsPost";
import AdminEventPost from "./Pages/AdminEventPost/AdminEventPost";

import Classes from "./Pages/Classes/Classes";
// import Gallery from "./Pages/Gallery/Gallery";
// import Events from "./Pages/Events/Events";
// import Classes from "./Pages/Classes/Classes";
// import Teachers from "./Pages/Teachers/Teachers";

import Testimonial from "./Pages/Testimonial/Testimonial";
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
          <Route path="/admin/gallery-post" element={<GalleryPost />} />
          <Route path="/admin/gallery-view" element={<GalleryView />} />
          <Route path="/admin/classes" element={<Classes />} />

          <Route path="/admin/testimonials" element={<Testimonial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AppLayout/AdminLayout";

import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminNewsPost from "./Pages/News/AdminNewsPost";
import AdminEventPost from "./Pages/AdminEventPost/AdminEventPost";

import Classes from "./Pages/Classes/Classes";
import Testimonial from "./Pages/Testimonial/Testimonial";
import GalleryPost from "./Pages/GalleryPost/GalleryPost";
import GalleryView from "./Pages/GalleryView/GalleryView";
import AdminAdvertisement from "./Pages/AdminAdv/AdminAdv";
import AdminColdLeads from "./Pages/dminColdLead/Sidebar";

import TeacherPost from "./Pages/TeacherPost/TeacherPost"; // ✅ added
import Contact from "./Pages/Contact/Contact";
import Admission from "./Pages/Admission/Admission";
import Fees from "./Pages/Fees/Fees";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Admin Layout Wrapper */}

        <Route element={<AdminLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/admin/news" element={<AdminNewsPost />} />

          <Route path="/admin/event" element={<AdminEventPost />} />

          <Route path="/admin/gallery-post" element={<GalleryPost />} />

          <Route path="/admin/gallery-view" element={<GalleryView />} />

          <Route path="/admin/classes" element={<Classes />} />

          <Route path="/admin/teachers" element={<TeacherPost />} />

          <Route path="/admin/testimonials" element={<Testimonial />} />

          <Route path="/admin/contact" element={<Contact />} />

          <Route path="/admin/advertisement" element={<AdminAdvertisement />} />

          <Route path="/admin/cold-lead" element={<AdminColdLeads />} />
          <Route path="/admin/admission" element={<Admission />} />
          <Route path="/admin/fees" element={<Fees />} />


        </Route>

      </Routes>
    </BrowserRouter>
  );
}
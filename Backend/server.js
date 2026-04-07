const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")

const connectDB = require("./config/db");

const eventRoutes = require("./routes/eventRoutes");
const newsRoutes = require("./routes/newsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const classRoutes = require("./routes/classRoutes");
const advertisementRoutes = require("./routes/advertisement.routes");
const enquiryRoutes = require("./routes/enquiry.routes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const contact = require('./routes/classRoutes')
const authRoutes = require("./routes/adminAuth.routes");
const teacherRoutes = require("./routes/teacher.routes");





dotenv.config();

connectDB();

const app = express();
app.use(cookieParser())

/* ================= CORS ================= */

app.use(
  cors({
    origin:[ "http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176"],
    credentials: true,
  })
);

/* ================= BODY ================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= STATIC ================= */

app.use("/uploads", express.static("uploads"));

/* ================= ROUTES ================= */

app.use("/api", newsRoutes);
app.use("/api", eventRoutes);
app.use("/api", contactRoutes);
app.use("/api",testimonialRoutes);
app.use("/api", galleryRoutes);
app.use("/api", classRoutes);
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api", testimonialRoutes);
app.use("/api",contact)
app.use("/api/auth", authRoutes);
app.use("/api", teacherRoutes);



/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

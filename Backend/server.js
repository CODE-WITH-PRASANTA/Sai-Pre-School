const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const eventRoutes = require("./routes/eventRoutes");
const newsRoutes = require("./routes/newsRoutes");
<<<<<<< HEAD
const contactRoutes = require("./routes/contactRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
=======
const galleryRoutes = require("./routes/galleryRoutes");
const classRoutes = require("./routes/classRoutes");
const advertisementRoutes = require("./routes/advertisement.routes");
const enquiryRoutes = require("./routes/enquiry.routes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const contact = require('./routes/classRoutes')
>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981

dotenv.config();

connectDB();

const app = express();

/* ================= CORS ================= */

app.use(cors());

/* ================= BODY ================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= STATIC ================= */

app.use("/uploads", express.static("uploads"));

/* ================= ROUTES ================= */

app.use("/api", newsRoutes);
app.use("/api", eventRoutes);
<<<<<<< HEAD
app.use("/api", contactRoutes);
app.use("/api",testimonialRoutes);
=======
app.use("/api", galleryRoutes);
app.use("/api", classRoutes);
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api", testimonialRoutes);
>>>>>>> 9fc4565e3103d9b44e0f372a1a1870ea91fe6981

app.use("/api",contact)

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

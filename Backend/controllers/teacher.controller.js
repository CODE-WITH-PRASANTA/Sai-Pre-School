const Teacher = require("../models/teacher.model");
const { deleteImageFile } = require("../middlewares/uploads");

/* ================= CREATE ================= */
exports.createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      ...req.body,
      image: req.body.image,
    });

    res.status(201).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= UPDATE ================= */
exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // 🔥 delete old image if new uploaded
    if (req.body.image && teacher.image) {
      deleteImageFile(teacher.image);
    }

    Object.assign(teacher, req.body);

    await teacher.save();

    res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // 🔥 delete image
    if (teacher.image) {
      deleteImageFile(teacher.image);
    }

    await teacher.deleteOne();

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
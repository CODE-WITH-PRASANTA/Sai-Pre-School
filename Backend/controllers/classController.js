const Class = require("../models/classModel");
const { deleteImageFile } = require("../middlewares/uploads");

/* ================= CREATE CLASS ================= */

exports.createClass = async (req, res) => {
  try {
  
    

    const newClass = await Class.create({
      className: req.body.className,
      classTime: req.body.classTime,
      classSize: req.body.classSize,
      yearsOld: req.body.yearsOld,
      tuitionFees: req.body.tuitionFees,
      description: req.body.description || "",
      image: req.file ? req.file.path : ""
    });

    res.status(201).json({
      success: true,
      data: newClass
    });

  } catch (error) {
    console.log("CREATE CLASS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


/* ================= GET ALL CLASSES ================= */

exports.getClasses = async (req, res) => {
  try {

    const classes = await Class.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: classes
    });

  } catch (error) {

    console.log("GET CLASSES ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


/* ================= UPDATE CLASS ================= */

exports.updateClass = async (req, res) => {
  try {

    const classData = await Class.findById(req.params.id);

    if (!classData) {
      return res.status(404).json({
        success: false,
        message: "Class not found"
      });
    }

    /* ---------- UPDATE IMAGE ---------- */

    if (req.file) {

      if (classData.image) {
        deleteImageFile(classData.image);
      }

      classData.image = req.file.path;
    }

    /* ---------- UPDATE OTHER FIELDS ---------- */

    classData.className = req.body.className;
    classData.classTime = req.body.classTime;
    classData.classSize = req.body.classSize;
    classData.yearsOld = req.body.yearsOld;
    classData.tuitionFees = req.body.tuitionFees;
    classData.description = req.body.description || "";

    await classData.save();

    res.json({
      success: true,
      data: classData
    });

  } catch (error) {

    console.log("UPDATE CLASS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


/* ================= DELETE CLASS ================= */

exports.deleteClass = async (req, res) => {
  try {

    const classData = await Class.findById(req.params.id);

    if (!classData) {
      return res.status(404).json({
        success: false,
        message: "Class not found"
      });
    }

    if (classData.image) {
      deleteImageFile(classData.image);
    }

    await classData.deleteOne();

    res.json({
      success: true,
      message: "Class deleted successfully"
    });

  } catch (error) {

    console.log("DELETE CLASS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
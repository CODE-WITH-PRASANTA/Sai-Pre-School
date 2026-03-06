const Event = require("../models/eventModel");
const { deleteImageFile } = require("../middlewares/uploads");

/* CREATE EVENT */
exports.createEvent = async (req, res) => {

  try {

    const event = await Event.create(req.body);

    res.json({
      success: true,
      data: event
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


/* GET EVENTS */
exports.getEvents = async (req, res) => {

  const events = await Event.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    data: events
  });

};


/* UPDATE EVENT */
exports.updateEvent = async (req, res) => {

  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (req.body.image && event.image) {
      deleteImageFile(event.image);
    }

    Object.assign(event, req.body);

    await event.save();

    res.json({
      success: true,
      data: event
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


/* DELETE EVENT */
exports.deleteEvent = async (req, res) => {

  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Not found" });
    }

    deleteImageFile(event.image);

    await event.deleteOne();

    res.json({
      success: true
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
const Contact = require("../models/contactModel");


// CREATE CONTACT
exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: savedContact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create contact",
      error: error.message,
    });
  }
};


// GET ALL CONTACTS
exports.getContacts = async (req, res) => {
  try {

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};


// UPDATE CONTACT
exports.updateContact = async (req, res) => {
  try {

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: updatedContact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update contact",
      error: error.message,
    });
  }
};


// DELETE CONTACT
exports.deleteContact = async (req, res) => {
  try {

    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete contact",
      error: error.message,
    });
  }
};
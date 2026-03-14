const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");


router.post("/contact", createContact);

router.get("/contact", getContacts);

router.put("/contact/:id", updateContact);

router.delete("/contact/:id", deleteContact);


module.exports = router;
const express = require("express");
const {
  getContacts,
  getContactnbyId,
  postContact,
  deleteContact,
  putContact,
} = require("../../controllers/contactsController");
const {
  addContactsValidation,
  putContactsValidation,
} = require("../../middlewares/validationMidlewares");

const router = express.Router();

router.get("/", getContacts);
router.get("/:contactId", getContactnbyId);
router.post("/", addContactsValidation, postContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", putContactsValidation, putContact);

module.exports = router;

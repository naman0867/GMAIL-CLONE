// routes/email.route.js

import express from "express";
import {
  sendEmail,
  getAllEmails,
  deleteEmail,
  getEmailById
} from "../controllers/email.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();


// send email
router.post("/send", isAuthenticated, sendEmail);


// get all emails
router.get("/all", isAuthenticated, getAllEmails);


// get single email
router.get("/:id", isAuthenticated, getEmailById);


// delete email
router.delete("/:id", isAuthenticated, deleteEmail);


export default router;
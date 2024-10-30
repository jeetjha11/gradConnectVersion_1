import express from "express";
import { getSMTPdata,updateSMTPdata,deleteSMTPdata,createSMTPData } from "../controllers/SMTPController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
 
const smtpRoute = express.Router();

smtpRoute.route("/createSMTP/:user").post(isAuthenticated,createSMTPData);
smtpRoute.route("/updateSMTP/:user").put(isAuthenticated,updateSMTPdata);
smtpRoute.route("/deleteSMTP/:user").delete(isAuthenticated,deleteSMTPdata);
smtpRoute.route("/viewSMTP/:user").get(isAuthenticated,getSMTPdata);

export default smtpRoute;


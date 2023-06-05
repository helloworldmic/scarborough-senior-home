import express from "express";
import {
  getPatientsController,
  postPatientController,
  postPatientRecordController,
  getPatientRecordByIdController,
  getCriticalPatientsController,
  updatePatientRecordController,
  updatePatientController,
} from "./controllers/PatientsController.js";
import {
  getUserController,
  postUserController,
} from "./controllers/UsersController.js";
const routes = express.Router();

routes.get("/patients", getPatientsController);
routes.post("/patient", postPatientController);
routes.get("/patientRecords/:id", getPatientRecordByIdController);
routes.post("/patientRecord/:id", postPatientRecordController);
routes.get("/users", getUserController);
routes.post("/user", postUserController);
routes.get("/criticalPatients", getCriticalPatientsController);
routes.put("/patient/:id", updatePatientController);
routes.put("/patientRecord/:id", updatePatientRecordController);

export default routes;

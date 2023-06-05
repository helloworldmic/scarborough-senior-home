// Require Mongoose
import mongoose from "mongoose"; //must not use "require", otherwise lead to routes.js out of module

// Define a schema
const Schema = mongoose.Schema;

const patientSchema = new mongoose.Schema({
  patientID: String, //added
  firstName: String,
  lastName: String,
  gender: String, //changed sex
  age: String,
  address: String,
  mobile: String, //changed phoneNumber
  email: String,
  condition: String,              // should be in patientRecord?
  // symptom:String
  // emergencyContact: String,
});
const patientRecordSchema = new Schema({
  patientID: String,
  typeOfData: String,
  reading: String,
  dateOfRecord: String,
  patientCondition: String, 
});

const userSchema = new Schema({
  userName: String,
  password: String,
  email: String,
  type: String,
});

// Compile model from schema
// RMB to export!!!!!!!!
export const PatientSchema = mongoose.model("patientSchema", patientSchema);
export const PatientRecordSchema = mongoose.model(
  "patientRecordSchema",
  patientRecordSchema
);
export const UserSchema = mongoose.model("userSchema", userSchema);

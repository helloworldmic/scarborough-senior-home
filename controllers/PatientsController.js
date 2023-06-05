import {
  PatientSchema,
  PatientRecordSchema,
  UserSchema,
} from "../models/PatientSchema.js";

export const getPatientsController = async (req, res) => {
  try {
    const patients = await PatientSchema.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postPatientController = async (req, res) => {
  const patient = req.body;
  const newPatient = new PatientSchema(patient);
  try {
    await newPatient.save();
    res.send(201).json(newPatient); //https://www.golinuxcloud.com/cannot-set-headers-after-they-are-sent-to-client/
  } catch (error) {
    res.send(409).json({ message: error.message });
  }
};
// const Patient = await PatientSchema.find();
// const newPatient = new Patient({
//   patientID: req.body.patientID,
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   gender: req.body.gender,
//   age: req.body.age,
//   address: req.body.address,
//   mobile: req.body.mobile,
//   email: req.body.email,
// }
// );
export const postPatientRecordController = async (req, res) => {
  const patientRecord = req.body;
  const newPatientRecord = new PatientRecordSchema(patientRecord);
  try {
    await newPatientRecord.save();
    res.send(201).json(newPatientRecord);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getPatientRecordByIdController = async (req, res) => {
  try {
    // const id = parseInt(req.query.id);
    const patientRecords = await PatientRecordSchema.find({
      patientID: req.params.id,
    });
    // console.log(req);
    res.status(200).json(patientRecords);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//     localhost:3000/criticalPatients?onlyCritical=critical
export const getCriticalPatientsController = async (req, res) => {
  try {
    if (req.query.onlyCritical == "true") {
      const criticalPatients = await PatientSchema.find({
        condition: "critical",
      });
      res.status(200).json(criticalPatients);
    }
    // console.log(req.query.onlyCritical.typeOfData); // why undefined?
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatePatientRecordController = async (req, res) => {
  const recordToUpdate = req.body;
  try {
    const updatedRecord = await PatientRecordSchema.findByIdAndUpdate(
      req.params.id, // req.params.id should inject record's id, aka  _id
      { ...recordToUpdate },
      { new: true }
    );
    console.log("updatedRecord:  " + updatedRecord);
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// for update patient and critical patient list
export const updatePatientController = async (req, res) => {
  // const { patientID: _id } = req.params.id;
  const inforToUpdate = req.body;
  console.log(inforToUpdate);
  try {
    const patientUpdatedInfo = await PatientSchema.findByIdAndUpdate(
      req.params.id,
      // { patientID: req.params.id }, //const {id:_id} --> use mongoose object id _id as patient's id}
      { ...inforToUpdate },
      { new: true }
    );
    console.log(req.params.id);
    // console.log(patientUpdatedInfo);
    res.status(200).json(patientUpdatedInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deletePatientRecordsController = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//trial 2: (why this one can't read what's imported)
// export const getPatientsController = async(req,res)=>{
//     res.json(await this.PatientSchema.getPatients())
// }

// trial 1: ref to Typescript notes
// export class PatientsController{
// constructor( patientSchema, patientSchema)
// get  = async(res, res)=>{
//     res.json(await this.patientSchema.getPatients())
// }

// }

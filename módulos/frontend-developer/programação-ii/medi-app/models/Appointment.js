import mongoose from "mongoose";
import Doctor from "./Doctor.js";
import Pacient from "./Pacient.js";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  doctorId: {
    type: String,
    required: [true, 'Doctorid is required'],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v); // convertendo uma string em objeto ID para ser encontrado no banco de dados

        return Doctor.exists({ _id: id });
      },
      message: (props) => `DoctorID ${props.value} does not exist.`,
    },
  },
  patientId: {
    type: String,
    required: [true, 'Patientid is required'],
    validate: {
      validator: function (v) {
        const id = new mongoose.Types.ObjectId(v); // convertendo uma string em objeto ID para ser encontrado no banco de dados

        return Pacient.exists({ _id: id });
      },
      message: (props) => `PatientID ${props.value} does not exist.`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model('Appointment', appointmentSchema);
export default appointment;
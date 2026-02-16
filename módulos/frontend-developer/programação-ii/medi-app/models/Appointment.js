import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  doctorId: {
    type: String,
    required: [true, 'Doctorid is required'],
  },
  pacientId: {
    type: String,
    required: [true, 'Patientid is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model('Appointment', appointmentSchema);
export default appointment;
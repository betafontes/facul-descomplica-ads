import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  doctorId: {
    type: String,
    required: [true, 'Doctorid is required'],
  },
  name: {
    type: String,
    required: [true, 'Doctorname is required'], 
  },
  login: {
    type: String,
    required: [true, 'login is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  medicalSpecialty: {
    type: String,
    required: [true, 'Medical specialty is required'],
  },
  medicalRegistration: {
    type: String,
    required: [true, 'Medical registration is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
});

const doctor = mongoose.model('Doctor', doctorSchema);
export default doctor;
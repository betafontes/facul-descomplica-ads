import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  appointmentId: {
    type: String,
    required: [true, 'AppointmentId is required'],
  },
  medicine: {
    type: String,
    required: [true, 'Medicine is required'],
  },
  dosage: {
    type: String,
    required: [true, 'Dosage is required'],
  },
  instructions: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Prescription', prescriptionSchema);

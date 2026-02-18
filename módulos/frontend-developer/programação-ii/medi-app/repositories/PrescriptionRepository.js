import Prescription from '../models/Prescription.js';

const getAllPrescriptions = async () => {
  return await Prescription.find();
};

const getPrescription = async (id) => {
  return await Prescription.findById(id);
};

const savePrescription = async ({
  date,
  appointmentId,
  medicine,
  dosage,
  instructions,
}) => {
  const prescription = new Prescription({
    date,
    appointmentId,
    medicine,
    dosage,
    instructions,
  });

  return await prescription.save();
};

const updatePrescription = async (
  id,
  { date, appointmentId, medicine, dosage, instructions },
) => {
  return await Prescription.findByIdAndUpdate(
    id,
    { date, appointmentId, medicine, dosage, instructions },
    { new: true },
  );
};

const deletePrescription = async (id) => {
  return await Prescription.findByIdAndDelete(id);
};

export default {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

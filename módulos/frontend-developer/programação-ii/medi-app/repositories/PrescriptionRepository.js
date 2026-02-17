import Prescription from '../models/Prescription.js';

const getAllPrescriptions = async () => {
  return await Prescription.find();
};

const getPrescription = async (id) => {
  try {
    return await Prescription.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const savePrescription = async ({ date, doctorId, patientId }) => {
  try {
    const prescription = new Prescription({
      date,
      doctorId,
      patientId,
    });
    return await prescription.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updatePrescription = async (id, { date, doctorId, patientId }) => {
  try {
    return await Prescription.findByIdAndUpdate(
      id,
      { date, doctorId, patientId },
      { new: true },
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deletePrescription = async (id) => {
  try {
    return await Prescription.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const prescriptionRepository = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

export default prescriptionRepository;

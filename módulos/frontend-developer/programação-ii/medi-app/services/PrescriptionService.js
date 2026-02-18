import prescriptionRepository from '../repositories/PrescriptionRepository.js';

const getAllPrescriptions = async () => {
  return prescriptionRepository.getAllPrescriptions();
};

const getPrescription = async (id) => {
  return prescriptionRepository.getPrescription(id);
};

const savePrescription = async (data) => {
  return prescriptionRepository.savePrescription(data);
};

const updatePrescription = async (id, data) => {
  return prescriptionRepository.updatePrescription(id, data);
};

const deletePrescription = async (id) => {
  return prescriptionRepository.deletePrescription(id);
};

export default {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

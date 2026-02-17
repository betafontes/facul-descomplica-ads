import prescriptionRepository from '../repositories/PrescriptionRepository.js';

const getAllPrescriptions = async () => {
  return prescriptionRepository.getAllPrescriptions();
};

const getPrescription = async (id) => {
  return prescriptionRepository.getPrescription(id);
};

const savePrescription = async ({ name, specialty }) => {
  return prescriptionRepository.savePrescription({ name, specialty });
};

const updatePrescription = async (id, { name, specialty }) => {
  return prescriptionRepository.updatePrescription(id, {
    name,
    specialty,
  });
};

const deletePrescription = async (id) => {
  return prescriptionRepository.deletePrescription(id);
};

const prescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

export default prescriptionService;

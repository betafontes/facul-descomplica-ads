import pacientRepository from '../repositories/PacientRepository.js';

const getAllPatients = async () => {
  return pacientRepository.getAllPatients();
};

const getPatient = async (id) => {
  return pacientRepository.getPatient(id);
};

const savePatient = async ({ name, age }) => {
  return pacientRepository.savePatient({ name, age });
};

const updatePatient = async (id, { name, age }) => {
  return pacientRepository.updatePatient(id, {
    name,
    age,
  });
};

const deletePatient = async (id) => {
  return pacientRepository.deletePatient(id);
};

const pacientService = {
  getAllPatients,
  getPatient,
  savePatient,
  updatePatient,
  deletePatient,
};

export default pacientService;

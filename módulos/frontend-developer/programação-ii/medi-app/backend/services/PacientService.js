import pacientRepository from '../repositories/PacientRepository.js';

const getAllPacients = async () => {
  return pacientRepository.getAllPacients();
};

const getPacientById = async (id) => {
  return pacientRepository.getPacientById(id);
};

const savePacient = async (data) => {
  return pacientRepository.savePacient(data);
};

const updatePacient = async (id, data) => {
  return pacientRepository.updatePacient(id, data);
};

const deletePacient = async (id) => {
  return pacientRepository.deletePacient(id);
};

export default {
  getAllPacients,
  getPacientById,
  savePacient,
  updatePacient,
  deletePacient,
};

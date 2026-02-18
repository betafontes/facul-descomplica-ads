import Pacient from '../models/Pacient.js';

const getAllPacients = async () => {
  return await Pacient.find();
};

const getPacientById = async (id) => {
  return await Pacient.findById(id);
};

const savePacient = async ({ name, birthDate, email, phone }) => {
  const pacient = new Pacient({
    name,
    birthDate,
    email,
    phone,
  });

  return await pacient.save();
};

const updatePacient = async (id, { name, birthDate, email, phone }) => {
  return await Pacient.findByIdAndUpdate(
    id,
    { name, birthDate, email, phone },
    { new: true },
  );
};

const deletePacient = async (id) => {
  return await Pacient.findByIdAndDelete(id);
};

export default {
  getAllPacients,
  getPacientById,
  savePacient,
  updatePacient,
  deletePacient,
};

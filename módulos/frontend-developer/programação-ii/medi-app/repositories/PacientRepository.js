import { Pacient } from '../models/Pacient.js';

const getAllPacients = async () => {
  return await Pacient.find();
};

const getPacient = async (id) => {
  try {
    return await Pacient.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const savePacient = async ({ name, age, gender }) => {
  try {
    const pacient = new Pacient({
      name,
      age,
      gender,
    });
    return await pacient.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updatePacient = async (id, { name, age, gender }) => {
  try {
    return await Pacient.findByIdAndUpdate(
      id,
      { name, age, gender },
      { new: true },
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deletePacient = async (id) => {
  try {
    return await Pacient.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const pacientRepository = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient,
};

export default pacientRepository;

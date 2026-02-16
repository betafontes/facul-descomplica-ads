import doctorRepository from '../repositories/DoctorRepository.js';

const getAllDoctors = async () => {
  return doctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
  return doctorRepository.getDoctor(id);
};

const saveDoctor = async ({ name, specialty }) => {
  return doctorRepository.saveDoctor({ name, specialty });
};

const updateDoctor = async (id, { name, specialty }) => {
  return doctorRepository.updateDoctor(id, {
    name,
    specialty,
  });
};

const deleteDoctor = async (id) => {
  return doctorRepository.deleteDoctor(id);
};

const doctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorService;

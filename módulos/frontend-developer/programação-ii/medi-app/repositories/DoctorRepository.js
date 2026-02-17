import Doctor from '../models/Doctor.js';

const getAllDoctors = async () => {
  return await Doctor.find();
};

const getDoctor = async (id) => {
  try {
    return await Doctor.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveDoctor = async ({ name, specialty }) => {
  try {
    const doctor = new Doctor({
      name,
      specialty,
    });
    return await doctor.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateDoctor = async (id, { name, specialty }) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      { name, specialty },
      { new: true },
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const doctorRepository = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorRepository;

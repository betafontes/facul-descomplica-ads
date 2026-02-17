import express from 'express';
import doctorService from './../services/DoctorService.js';
let router = express.Router();

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.send(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/getDoctor/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await doctorService.getDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/postDoctor/', async (req, res) => {
  const { name, specialty, crm } = req.body;
  try {
    const doctor = await doctorService.saveDoctor(name, specialty, crm);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  const { name, specialty, crm } = req.body;
  try {
    const doctor = await doctorService.updateDoctor(id, {
      name,
      specialty,
      crm,
    });
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  const { name, specialty, crm } = req.body;
  try {
    const doctor = await doctorService.updateDoctor(id, {
      name,
      specialty,
      crm,
    });
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await doctorService.deleteDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;

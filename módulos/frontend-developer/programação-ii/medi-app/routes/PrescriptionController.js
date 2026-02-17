import express from 'express';
import prescriptionService from './../services/PrescriptionService.js';
let router = express.Router();

router.get('/prescriptions', async (req, res) => {
  try {
    const prescriptions = await prescriptionService.getAllPrescriptions();
    res.send(prescriptions);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/getPrescription/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await prescriptionService.getPrescription(id);
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/postPrescription/', async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const patient = await prescriptionService.savePrescription(
      name,
      age,
      gender,
    );
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const patient = await prescriptionService.updatePrescription(id, {
      name,
      age,
      gender,
    });
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/prescription/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const patient = await prescriptionService.updatePrescription(id, {
      name,
      age,
      gender,
    });
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await prescriptionService.deletePrescription(id);
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;

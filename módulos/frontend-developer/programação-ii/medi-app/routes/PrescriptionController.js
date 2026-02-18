import express from 'express';
import prescriptionService from '../services/PrescriptionService.js';

const router = express.Router();

router.get('/getPrescription', async (req, res) => {
  try {
    const prescriptions = await prescriptionService.getAllPrescriptions();
    res.json(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/getPrescription/:id', async (req, res) => {
  try {
    const prescription = await prescriptionService.getPrescription(
      req.params.id,
    );
    res.json(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/postPrescription', async (req, res) => {
  try {
    const prescription = await prescriptionService.savePrescription(req.body);
    res.status(201).json(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/prescriptions/:id', async (req, res) => {
  try {
    const prescription = await prescriptionService.updatePrescription(
      req.params.id,
      req.body,
    );
    res.json(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/prescriptions/:id', async (req, res) => {
  try {
    await prescriptionService.deletePrescription(req.params.id);
    res.json({ message: 'Prescription deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

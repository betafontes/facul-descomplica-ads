import express from 'express';
import PacientService from '../services/PacientService.js';

const router = express.Router();

router.get('/getPacient', async (req, res) => {
  try {
    const pacients = await PacientService.getAllPacients();
    res.json(pacients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/getPacient/:id', async (req, res) => {
  try {
    const pacient = await PacientService.getPacientById(req.params.id);
    res.json(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/postPacient', async (req, res) => {
  try {
    const pacient = await PacientService.savePacient(req.body);
    res.status(201).json(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/pacients/:id', async (req, res) => {
  try {
    const pacient = await PacientService.updatePacient(req.params.id, req.body);
    res.json(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/pacients/:id', async (req, res) => {
  try {
    await PacientService.deletePacient(req.params.id);
    res.json({ message: 'Pacient deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

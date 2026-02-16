import { express } from 'express';
import patientService from './../services/PacientService';
let router = express.Router();

router.get('/patients', async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.send(patients);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/getPatient/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await patientService.getPatient(id);
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/postPatient/', async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const patient = await patientService.savePatient(name, age, gender);
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const patient = await patientService.updatePatient(id, {
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

router.put('/patients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;
  try {
    const patient = await patientService.updatePatient(id, {
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

router.delete('/patients/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await patientService.deletePatient(id);
    res.send(patient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;

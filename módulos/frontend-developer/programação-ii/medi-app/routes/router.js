import express from 'express';
import appointmentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import patientController from './PacientController.js';
import prescriptionController from './PrescriptionController.js';

let router = express.Router();

router.get('/', function (req, res) {
  console.log('Received a GET request at /');
  res.status(200).json({ message: 'Hello, World!' });
});

router.use('/', appointmentController);
router.use('/', doctorController);
router.use('/', patientController);
router.use('/', prescriptionController);

export default router;

import express from 'express';
import {
  getAllReservation,
  createReservation,
} from '../controllers/reservation.js';
const router = express.Router();

router.route('/').get(getAllReservation);
router.route('/').post(createReservation);

export default router;

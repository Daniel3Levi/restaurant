import express from 'express';
import { getAllCustomers, createCustomer } from '../controllers/customer.js';
const router = express.Router();

router.route('/').get(getAllCustomers);
router.route('/').post(createCustomer);

export default router;

import Customer from '../models/CustomersModel';

export const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({});
  res.status(200).json({ customers });
};

export const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({ customer });
};

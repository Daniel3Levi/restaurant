import mongoose from 'mongoose';

const CustomerSchema = new Schema({
  name: {
    type: String,
  },
  food: {
    type: [String],
  },
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;

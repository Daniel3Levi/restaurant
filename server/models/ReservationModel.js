import mongoose from 'mongoose';

const ReservationSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    maxlength: [20, 'name can not be more than 20 characters'],
  },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;

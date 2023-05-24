import Reservation from '../models/ReservationModel';

export const getAllReservation = async (req, res) => {
  const reservation = await Reservation.find({});
  res.status(200).json({ reservation });
};

export const createReservation = async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.status(201).json({ reservation });
};

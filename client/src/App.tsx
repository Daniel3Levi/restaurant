import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './featuers/reservationSlice';
import CustomerCard from './components/CustomerCard';
function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');
  const reservation = useSelector(
    (state: RootState) => state.reservation.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const generateKey = (name: string) => {
    return `${name}_${new Date().getTime()}`;
  };

  const dispatch = useDispatch();
  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name: string) => {
                return (
                  <ReservationCard
                    key={generateKey(name)}
                    name={name}
                    index={reservation.indexOf(name)}
                  />
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

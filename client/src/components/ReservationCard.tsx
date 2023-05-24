import { useDispatch } from 'react-redux';
import { removeReservation } from '../featuers/reservationSlice';
import { addCostumer } from '../featuers/customerSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleClickName = () => {
    dispatch(removeReservation(index));

    dispatch(
      addCostumer({
        id: uuid(),
        name,
        food: [],
      })
    );
  };

  return (
    <div onClick={handleClickName} className="reservation-card-container">
      {name}
    </div>
  );
};

export default ReservationCard;

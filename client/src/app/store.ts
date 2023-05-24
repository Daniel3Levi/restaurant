import { configureStore } from '@reduxjs/toolkit';
import { reservationReducer } from '../featuers/reservationSlice';
import { customerReducer } from '../featuers/customerSlice';
export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    customers: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

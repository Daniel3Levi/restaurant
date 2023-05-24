import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservatioState {
  value: string[];
}

const initialStateReservation: ReservatioState = {
  value: [],
};
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: initialStateReservation,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;

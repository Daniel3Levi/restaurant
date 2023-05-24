import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCostumerPayload {
  food: string;
  id: string;
}
const initialStateCustomer: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState: initialStateCustomer,
  reducers: {
    addCostumer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCostumer: (
      state,
      action: PayloadAction<AddFoodToCostumerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCostumer, addFoodToCostumer } = customerSlice.actions;
export const customerReducer = customerSlice.reducer;

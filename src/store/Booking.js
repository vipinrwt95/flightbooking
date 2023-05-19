import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BookingTime:[]
};

export const BookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    addbooking(state, action) {
     state.BookingTime=[...state.BookingTime,action.payload];
    },
    delbooking(state,action)
    {
     state.BookingTime=[];   
    }
    },
});

export const { addbooking,delbooking } = BookingSlice.actions; // Destructure the actions

export default BookingSlice.reducer; // Export the reducer

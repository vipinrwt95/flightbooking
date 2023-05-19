import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth'; // Import the auth reducer
import flightReducer from './Flights';
import BookingReducer from './Booking';

const store = configureStore({
  reducer: {
    auth: authReducer, // Use the auth reducer
    flight:flightReducer,
    booking:BookingReducer
  },
});

export default store;

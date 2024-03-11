import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slider/counterSlider';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
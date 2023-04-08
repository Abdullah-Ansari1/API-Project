import { configureStore } from '@reduxjs/toolkit';
import modalReducers from '../reducers/handleModalsReducers';
export const store = configureStore({
  reducer: {
    modal:modalReducers,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';
import expensesSlice from './expensesSlice';
import statisticsSlice from './statisticsSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    expensesSlice: expensesSlice,
    statisticsSlice: statisticsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});

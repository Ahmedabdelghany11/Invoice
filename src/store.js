import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from "./features/invoiceSlice";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
})

export default store;
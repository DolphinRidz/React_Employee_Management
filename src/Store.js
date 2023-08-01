import { configureStore } from '@reduxjs/toolkit';

import UserSlice from './features/user/UserSlice';
import formReducer from './features/formData/formSlice';
export const Store = configureStore({
  reducer: {
    user: UserSlice,
    form: formReducer,
  },
});
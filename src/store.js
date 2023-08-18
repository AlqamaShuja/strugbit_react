import { combineReducers, configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';

const rootReducer = combineReducers({
    customer: customerSlice
});


export const store = configureStore({
    reducer: rootReducer,
});


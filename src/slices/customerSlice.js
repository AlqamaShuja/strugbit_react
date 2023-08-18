import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerService from '../services/customerService';

const initialState = {
    customerList: [],
}

export const fetchCustomerList = createAsyncThunk(
    "customer/fetchCustomerList",
    async (data, { rejectWithValue }) => {
        try {
            const res = await customerService.getCustomerList();
            return res.data.data;
        } catch (error) {
            // console.log(error);
            return rejectWithValue(error);
        }
    }
)

const customerSlice  = createSlice({
    initialState,
    name: "customer",
    reducers: {
        addCustomerReducer: (state, action) => {},
        deleteCustomerReducer: (state, action) => {},
        updateCustomerReducer: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder.
        addCase(fetchCustomerList.fulfilled, (state, action) => {
            state.customerList = action.payload;
        });
    }
});


export const { addCustomerReducer, deleteCustomerReducer, updateCustomerReducer } = customerSlice.actions;
export default customerSlice.reducer;
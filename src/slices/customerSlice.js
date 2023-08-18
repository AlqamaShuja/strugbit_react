import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerService from '../services/customerService';

const initialState = {
    customerList: JSON.parse(localStorage?.getItem("customers")) || [],
}

export const fetchCustomerList = createAsyncThunk(
    "customer/fetchCustomerList",
    async (data, { rejectWithValue, getState }) => {
        try {
            const customers = getState().customer.customerList || [];
            if(customers.length > 0){
                return customers
            }
            else{
                const res = await customerService.getCustomerList();
                return res.data.data;
            }
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
        updateCustomerList: (state, action) => {
            state.customerList = action.payload;
            localStorage.setItem("customers", JSON.stringify(action.payload));
        },
    },
    extraReducers: (builder) => {
        builder.
        addCase(fetchCustomerList.fulfilled, (state, action) => {
            state.customerList = action.payload;
        });
    }
});


export const { updateCustomerList } = customerSlice.actions;
export default customerSlice.reducer;
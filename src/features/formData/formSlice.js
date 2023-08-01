import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    name: '',
    phone: '',
    selectedOption: '',

};

export const submitForm = createAsyncThunk('form/submitForm', async (formData) => {
    return formData;
});

const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submitForm.pending, (state) => {
            // Set isLoading to true when the form submission is pending
            state.isLoading = true;
        })
            .addCase(submitForm.fulfilled, (state, action) => {
                // Store the submitted form data in the Redux store
                state.isLoading = false;
                state.name = action.payload.name;
                state.contact = action.payload.contact;
                state.selectedOption = action.payload.selectedOption;

            })
            .addCase(submitForm.rejected, (state) => {
                // Handle the submitForm rejected action here (if needed)
                // Reset the state or show an error message if required
                state.isLoading = false;
            });
    }
});

export default formSlice.reducer;
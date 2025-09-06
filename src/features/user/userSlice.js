import userThunk from "./userThunk";
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userDetails',
    initialState: {
        userDetails: {},
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(userThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.userDetails = action.payload;
            })
            .addCase(userThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})
export default userSlice.reducer;
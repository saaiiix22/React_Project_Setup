import { createAsyncThunk } from "@reduxjs/toolkit";
const userThunk = createAsyncThunk('user/getData',async () => {
    try {
        const token = sessionStorage.getItem('token')
        // const res = await specificUserInfo(token)       
        // return res.data
    } catch (error) {
        // console.log(error);
        throw error
    }
})
export default userThunk
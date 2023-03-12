import { createSlice } from "@reduxjs/toolkit";
import { GetAllJobs } from "./jobsActions";

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        Jobs: [],
        messages: "",
        isLoading: false,
        isSuccess: false,
     },
    reducers: {
    },
    extraReducers: {
        [GetAllJobs.pending]: (state, { payload }) => {
            state.loading = true
        },
        [GetAllJobs.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.Jobs = payload
            state.isSuccess = true

        },
        [GetAllJobs.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false

        }
    }
})

 
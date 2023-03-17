import { createSlice } from "@reduxjs/toolkit";
import { GetAllJobs, GetAllJobsRecent} from "./jobsActions";

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        Jobs: [],
        messages: "",
        isLoading: false,
        isSuccess: false,
        favourit: [],
        jobsRecent:[]
     },
    reducers: {
    },
    extraReducers: {
        [GetAllJobs.pending]: (state, { payload }) => {
            state.isLoading = true
        },
        [GetAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.Jobs = payload
            state.isSuccess = true

        },
        [GetAllJobsRecent.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.jobsRecent = payload
            state.isSuccess = true

        },
        [GetAllJobs.rejected]: (state, { payload }) => {
            state.messages = payload
            state.isLoading = false
            state.isSuccess = false
        }
      
    }
})


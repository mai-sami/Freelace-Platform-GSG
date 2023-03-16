import { createSlice } from "@reduxjs/toolkit";
import { GetFilterJobs, SearchJobs } from "./filterAxctions";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        messages: "",
        isLoading: false,
        isSuccess: false,
        Filter: [],
        Search:[]
    },
    reducers: {

    },
    extraReducers: {

        [GetFilterJobs.pending]: (state, { payload }) => {
            state.loading = true
        },
        [GetFilterJobs.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.Filter = payload
            state.isSuccess = true

        },
        [GetFilterJobs.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false
        
        },
        [SearchJobs.pending]: (state, { payload }) => {
            state.loading = true
        },
        [SearchJobs.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.Search = payload
            state.isSuccess = true

        },
        [SearchJobs.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false

        }
    }
})


import { createSlice } from "@reduxjs/toolkit";
import { FavouritJobs, GetFavouritJobs } from "./favouritAction";

export const favouritSlice = createSlice({
    name: "favourit",
    initialState: {
        messages: "",
        isLoading: false,
        isSuccess: false,
        data: [],
        favourit: []
    },
    reducers: {
    },
    extraReducers: {
        [GetFavouritJobs.pending]: (state, { payload }) => {
            state.isLoading = true
        },
        [GetFavouritJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.favourit = payload
            state.isSuccess = true

        },
        [GetFavouritJobs.rejected]: (state, { payload }) => {
            state.messages = payload
            state.isLoading = false
            state.isSuccess = false

        },
        [FavouritJobs.fulfilled]: (state, { payload }) => {
            console.log([payload])
            console.log(payload)
            state.isLoading = false
            state.data = payload
            state.isSuccess = true

        },

    }
})


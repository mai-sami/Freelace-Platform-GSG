import { createSlice } from "@reduxjs/toolkit";
import { FavouriteJobs } from "./favouriteActions";

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        Favourite: []
    },
    reducers: {
        addToFavourite: (state, { payload }) => {
            state.Favourite.push(payload)
        },
        deleteToFavourite: (state, {payload}) => {
            return state.Favourite.filter((job) => job.id !== payload.id)
        }
    },
    extraReducers: {
        [FavouriteJobs.pending]: (state, { payload }) => {
            state.loading = true
        },
        [FavouriteJobs.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.Favourite = payload
            state.isSuccess = true

        },
        [FavouriteJobs.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false

        }
    }
})
export const { addToFavourite, deleteToFavourite } = favouriteSlice.actions
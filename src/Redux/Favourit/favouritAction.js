import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../Config/api"


export const GetFavouritJobs = createAsyncThunk(
    'jobs/getAllfavourit',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}favourit`,
            )
             return response.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const FavouritJobs = createAsyncThunk(
    'jobs/favourit',
    async ([id,{data}], { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}favourit`, {id,data }
            )
             return response.data.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

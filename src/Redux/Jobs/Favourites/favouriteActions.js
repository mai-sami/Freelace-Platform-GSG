import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../../Config/api"

export const FavouriteJobs = createAsyncThunk(
    'jobs/Favourite',//name+login  name what the function do
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}favourit`,
            )
            console.log(response.data, "FavouriteJobs")
            return response.data
        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../Config/api"

export const GetAllJobs = createAsyncThunk(
    'jobs/allJobs',//name+login  name what the function do
    async (_,{ rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs`,
            )
            console.log(response.data,"response.data")
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
 
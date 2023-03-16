import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../Config/api"

export const GetAllJobs = createAsyncThunk(
    'jobs/allJobs',//name+login  name what the function do
    async ({page,limit}, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs?_page=${page}&_limit=${limit}`,
            )
            console.log(response.data, "jobs")
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
 
 
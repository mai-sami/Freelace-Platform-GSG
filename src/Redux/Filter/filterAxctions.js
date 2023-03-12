import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../Config/api"

export const GetFilterJobs = createAsyncThunk(
    'filter/allfilter',//name+login  name what the function do
    async ({ catrgoies, type }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs?${catrgoies}=${type}`,
            )
            console.log(response.data, "filter")
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

export const SearchJobs = createAsyncThunk(
    'jobs/search',//name+login  name what the function do
    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs?q=${value}`,
            )
            console.log(response.data, "search")
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


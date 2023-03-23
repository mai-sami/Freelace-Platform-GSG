import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../api/api"

export const GetFilterJobs = createAsyncThunk(
    'filter/allfilter',
    async ({ value }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs?levels=${value}&levels=${value}`)
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

export const SearchJobs = createAsyncThunk(
    'jobs/search',
    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}jobs?q=${value}`,
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


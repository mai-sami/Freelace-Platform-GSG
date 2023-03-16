import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Base_Url } from "../../Config/api"

export const GetUserData = createAsyncThunk(
    'profile/alldata',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}profile`,
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

export const GetUserLanguages = createAsyncThunk(
    'profile/languages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}languages`,
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
export const EditUserPrice = createAsyncThunk(
    'profile/editPrice',
    async ([id, data, priceHoure], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, priceHoure }
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
export const EditUserText = createAsyncThunk(
    'profile/editText',
    async ([id, data, feaild], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, feaild }
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
export const EditUserDescription = createAsyncThunk(
    'profile/editDescription',
    async ([id, data, discription], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, discription }
            )
            console.log(response.data, "response.data")
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
export const EditUserSkills = createAsyncThunk(
    'profile/editSkills',
    async ([id, data, [...skillsItem]], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, skillsItem }
            )
            console.log(response.data, "response.data")
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
export const GetUserEducation = createAsyncThunk(
    'profile/education',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}education`,
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
export const GetProfileImages = createAsyncThunk(
    'profile/GetallProfileImages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}images`,
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

export const DeleteEducation = createAsyncThunk(
    'profile/education',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `${Base_Url}education/${id}`,
            )
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
export const AddProfileImages = createAsyncThunk(
    'profile/AddProfileImages',
    async ({ imageOne, imageTwo }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}images`, { imageOne, imageTwo }
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
export const AddEducation = createAsyncThunk(
    'profile/education',
    async ({ name, text, start, end, description }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}education`, { name, text, start, end, description }
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
export const AddLanguges = createAsyncThunk(
    'profile/languages',
    async ({ name, text, start, end, description }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}languages`, { name, text, start, end, description }
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
export const EditHourTypeWork = createAsyncThunk(
    'profile/profile',
    async ([id, data, perWeek], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, perWeek }
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
export const EditprofileVisibility = createAsyncThunk(
    'profile/profile',
    async ([id, data, profileVisibility], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, profileVisibility }
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

export const EditprofileBadge = createAsyncThunk(
    'profile/profile',
    async ([id, data, badge], { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${Base_Url}profile/${id}`, { ...data, badge }
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
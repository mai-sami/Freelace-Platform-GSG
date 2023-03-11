import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Base_Url } from '../../Config/api'
import { Config } from '../../Config/Header'
import { Navigate } from 'react-router-dom'


export const GetAllUser = createAsyncThunk(
    'auth/users',//name+login  name what the function do
    async (_,{ rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${Base_Url}users`,
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
export const LoginActions = createAsyncThunk(
    'auth/register',//name+login  name what the function do
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}login`,
                { email, password }, Config
            )
            // localStorage.setItem('user', JSON.stringify(response.data))
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
export const RegisterActions = createAsyncThunk(
    'auth/users',
    async ({ firstName, last_name, email, password, selectedOptions, checks }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${Base_Url}register`,
                { firstName, last_name, email, password, selectedOptions, checks },
                Config
            )
            console.log(response.data.checks)

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

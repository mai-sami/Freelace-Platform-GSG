import { createSlice } from "@reduxjs/toolkit";
import { GetAllUser, LoginActions, RegisterActions } from "./authActions";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
        message: "",
        loading: false,
        isSuccess: false,
        users: [],
        allUsers: []
    },
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(LoginActions.pending, (state) => {
    //             state.loading = true
    //         }).addCase(LoginActions.fulfilled, (state,action) => {
    //             console.log(action.payload, "login")
    //             state.loading = false
    //             state.data = action.payload
    //             state.isSuccess = true
    //         })
    //         .addCase(LoginActions.rejected,(state)=>{
    //             state.loading = true
    //         });
    //         builder.addCase(RegisterActions.pending, (state) => {
    //             state.loading = true
    //         }).addCase(RegisterActions.fulfilled, (state,action) => {
    //             console.log(action.payload, "login")
    //             state.loading = false
    //             state.users = action.payload
    //             state.isSuccess = true
    //         })
    //         .addCase(RegisterActions.rejected,(state)=>{
    //             state.loading = true
    //         })
    //     }
    extraReducers: {
        [GetAllUser.pending]: (state, { payload }) => {
            state.loading = true
        },
        [GetAllUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.allUsers = payload
            state.isSuccess = true

        },
        [GetAllUser.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false

        },
        [LoginActions.pending]: (state, { payload }) => {
            state.loading = true
        },
        [LoginActions.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
            state.isSuccess = true

        },
        [LoginActions.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false
        },
        [RegisterActions.pending]: (state, { payload }) => {
            state.loading = true
        },
        [RegisterActions.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.users = payload
            state.isSuccess = true

        },
        [RegisterActions.rejected]: (state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false
        },
    }
});
export default authSlice
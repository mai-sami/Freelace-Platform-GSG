import { createSlice } from "@reduxjs/toolkit";
import { AddEducation, AddLanguges, AddProfileImages, DeleteEducation, EditHourTypeWork, EditLanguges, EditprofileBadge, EditprofileVisibility, EditUserDescription, EditUserPrice, EditUserSkills, EditUserText, GetProfileImages, GetUserData, GetUserLanguages } from "./profileActions";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        data: [],
        messages: "",
        isLoading: false,
        isSuccess: false,
        languages: [],
        education: [],
        Images: []

    },
    reducers: {
    },
    extraReducers: {
        [GetUserData.pending]: (state, { payload }) => {
            state.isLoading = true
        },
        [GetUserData.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = payload
            state.isSuccess = true
        },
        [GetUserData.rejected]: (state, { payload }) => {
            state.messages = payload
            state.isLoading = false
            state.isSuccess = false

        }
        , [GetUserLanguages.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.languages = payload
            state.isSuccess = true
        },
        [EditUserPrice.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            // const data = state.data.filter((item) => item.id !== payload.id)

            state.data = [payload]
            state.isSuccess = true
        },
        [EditUserText.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            console.log(payload)
            state.data = [payload]
            state.isSuccess = true
        },
        [EditUserText.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true
        },
        [EditUserDescription.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true

        },
        [EditUserSkills.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true

        },
        [GetProfileImages.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.Images = payload
            state.isSuccess = true
        },
        [AddProfileImages.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.Images = [payload]
            state.isSuccess = true

        },

        [AddEducation.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.education = payload
            state.isSuccess = true
        },
        [DeleteEducation.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.education = payload
            state.isSuccess = true
        }, [AddLanguges.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.languages = payload
            state.isSuccess = true
        },
        [EditHourTypeWork.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true

        },
        [EditprofileVisibility.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true

        }
        ,
        [EditprofileBadge.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = [payload]
            state.isSuccess = true

        }
    }

})


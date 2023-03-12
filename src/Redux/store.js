import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import { filterSlice } from './Filter/filterSlice'
import { favouriteSlice } from './Jobs/Favourites/favouriteSlice'
import { jobsSlice } from './Jobs/jobsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    jobs: jobsSlice.reducer,
    favourite: favouriteSlice.reducer,
    filter:filterSlice.reducer
  }
})


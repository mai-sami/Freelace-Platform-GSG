import { configureStore } from '@reduxjs/toolkit'
 import { favouritSlice } from './Favourit/favouritSlice'
import { filterSlice } from './Filter/filterSlice'
import { jobsSlice } from './Jobs/jobsSlice'
import { profileSlice } from './Profile/profileSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
    filter: filterSlice.reducer,
    profile: profileSlice.reducer,
    favourit: favouritSlice.reducer

  }
})


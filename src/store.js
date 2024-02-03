import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/Auth'
import notesReducer from "./Slices/Notes"

export const store = configureStore({
  reducer: {
    auth : authReducer,
    notes : notesReducer
  },
})


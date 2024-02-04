import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/AuthSlice'
import notesReducer from "./Slices/NotesSlice"

export const store = configureStore({
  reducer: {
    auth : authReducer,
    notes : notesReducer
  },
})


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes : []
}

const Notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
      addNote : (state,action) => {
          state.notes = action.payload
      },
      postNotes : (state ,action) => {
          state.notes.push(action.payload)
      },
      deleteNotes : (state , action) => {
         const {id} = action.payload
         const deleted = state.notes.findIndex(notes => notes.id === id)
         state.notes.splice(deleted , 1)
        },
      }
});

export const {addNote , postNotes , deleteNotes} = Notes.actions

export default Notes.reducer
import { createSlice } from '@reduxjs/toolkit'

// {id : 6 , 'username' : 'obi.wan1@jedicouncil.com' , 'title' : 'that one time....', 'content' : 'I have the high ground'}
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
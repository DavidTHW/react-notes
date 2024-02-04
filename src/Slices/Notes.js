import { createSlice } from '@reduxjs/toolkit'

//pre-populate some details here to allow user to see some post that belongs to them (sample)
	// "username": "luke.skywalker@resistence.com",
	// "password": "password123"
	// },
	// {
	// 	"username": "darth.vader@empire.com",
	// 	"password": "iamyourfather"
	// },
	// {
	// 	"username": "yoda@jedicouncil.com",
	// 	"password": "challengeyoumusthmm?"
	// }

const initialState = {
    notes : ''
}

const Notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
      addNote : (state,action) => {
          state.notes = action.payload
      },
  }
});

export const {addNote} = Notes.actions

export default Notes.reducer
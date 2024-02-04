import { createSlice } from '@reduxjs/toolkit'

const userToken = JSON.parse(localStorage.getItem('userToken'))

const initialState = {
  authState: userToken ? userToken.auth : null,
  username : userToken ? userToken.username : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    user: (state, action) => {
      state.username = action.payload
    },
    authState: (state, action) => {
      state.authState = action.payload
    },
  },
})

export const { user, authState} = authSlice.actions

export default authSlice.reducer
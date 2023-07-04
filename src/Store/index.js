import { createSlice, configureStore } from '@reduxjs/toolkit'

const userslice = createSlice({
  name: 'counter',
  initialState: {
    name : "",
    lastname:"",
    token:"",
    email:""
  },
  reducers: {
   
    SetUser: (state, action) => {
     return (state = action.payload)
    }
  }
})

export const { SetUser } = userslice.actions
export const getUserData = (state) => state.user
export const store = configureStore({
  reducer: {user:userslice.reducer } 
})



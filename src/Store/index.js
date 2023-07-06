import { createSlice, configureStore } from '@reduxjs/toolkit';

const userslice = createSlice({
  name: 'counter',
  initialState: {
    accessToken: '',
    tokenType: '',
    username: ''
  },
  reducers: {
    SetUser: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { SetUser } = userslice.actions;
export const getUserData = (state) => state.user;

const filmSlice = createSlice({
  name: 'film',
  initialState: {},
  reducers: {
    setFilm: (state, action) => {
      return action.payload;
    }
  }
});

export const { setFilm } = filmSlice.actions;
export const getFilm = (state) => state.film;

export const store = configureStore({
  reducer: {
    user: userslice.reducer,
    film: filmSlice.reducer
  }
});
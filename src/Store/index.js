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

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    }
  }
});

export const { setCategories } = categorySlice.actions;
export const getCategories = (state) => state.category;

// Nuova slice e reducer per i preferiti
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    setFavourites: (state, action) => {
      return action.payload;
    },
    addToFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return state.filter((fav) => fav.id !== action.payload);
    }
  }
});

export const { setFavourites, addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export const getFavourites = (state) => state.favourites;

export const store = configureStore({
  reducer: {
    user: userslice.reducer,
    film: filmSlice.reducer,
    category: categorySlice.reducer,
    favourites: favouritesSlice.reducer // Aggiungi il reducer dei preferiti allo store
  }
});

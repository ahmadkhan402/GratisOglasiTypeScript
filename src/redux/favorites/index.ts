import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favoriteData: Array<string>;
}

const initialState: FavoriteState = {
  favoriteData: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Array<string>>) {
      state.favoriteData = action.payload;
    },
    addFavorite(state, action: PayloadAction<string>) {
      state.favoriteData.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favoriteData = state.favoriteData.filter(
        (id) => id !== action.payload
      );
    },
  },
});

// Export the actions
export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

// Export the reducer
export default favoritesSlice.reducer;

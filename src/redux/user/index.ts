// store/exampleSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the slice state
interface userState {
  userData?: object;
}

// Define the initial state
const initialState: userState = {
  userData: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
    },

    emptyUserData: (state: any) => {
      state.userData = null;
    },
    // add more reducers as needed
  },
});

export const { addUser, emptyUserData } = userSlice.actions;
export default userSlice.reducer;

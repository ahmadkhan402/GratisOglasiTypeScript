// store/exampleSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface userItem {
  id: number;
  name: string;
}

// Define the type for the slice state
interface userState {
  userData: userItem[];
}

// Define the initial state
const initialState: userState = {
  userData: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userItem>) => {
      console.log("payload", action.payload);
      console.log("state", state.userData);

      const userExists = state.userData.find(
        (user) => user.id === action.payload.id
      );
      if (!userExists) {
        state.userData.push(action.payload);
      }
    },
    emptyUserData: (state) => {
      state.userData = [];
    },
    // add more reducers as needed
  },
});

export const { addUser, emptyUserData } = userSlice.actions;
export default userSlice.reducer;

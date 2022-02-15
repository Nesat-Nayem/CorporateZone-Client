import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    currentUser: null,
    error: null,
  },
  reducers: {
    initialUserData: (state, action) => {
      if (action.payload) {
        const { displayName, email, photoURL } = action?.payload?.user;
        console.log(displayName, email, photoURL);
        return {
          ...state,
          loading: false,
          currentUser: { displayName, email, photoURL },
        };
      } else {
        return {
          ...state,
          loading: false,
          currentUser: null,
        };
      }
    },
    registerUser: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    },
    signIn: (state, action) => {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    },
    signOutCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialUserData, registerUser, signIn, signOutCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;

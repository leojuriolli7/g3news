import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  profileImage: undefined,
  firstName: null,
  lastName: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, payload) {
      state.id = payload.payload.id;
      state.email = payload.payload.email;
      state.profileImage = payload.payload.profileImage;
      state.firstName = payload.payload.firstName;
      state.lastName = payload.payload.lastName;
      state.token = payload.payload.token;
    },
    logout: () => initialState,
    // logout(state) {
    //   state.id = null
    //   state.email = null
    //   state.firstName = null
    //   state.lastName = null
    //   state.token = null
    // }
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

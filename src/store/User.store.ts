import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  token: null,
  profileImage: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: any) {
      state.id = payload.user.id;
      state.email = payload.user.email;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
      state.token = payload.accessToken;
      state.profileImage = payload.user.profileImage;
      state.isLogged = true;
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

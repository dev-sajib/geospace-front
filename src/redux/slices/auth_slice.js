import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("authToken") || null,
  isAuthenticated: !!localStorage.getItem("authToken"),
  role: JSON.parse(localStorage.getItem("user"))?.RoleName || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { Token, UserDetails } = action.payload;
      state.user = UserDetails;
      state.token = Token;
      state.role = UserDetails.RoleName;
      state.isAuthenticated = true;
      localStorage.setItem("authToken", Token);
      localStorage.setItem("user", JSON.stringify(UserDetails));
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;

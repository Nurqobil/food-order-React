import { createSlice } from "@reduxjs/toolkit";
const initialValue = { isVerify: false, karzinka: [] };
const orderSlice = createSlice({
  initialState: initialValue,
  name: "orderSlice",
  reducers: {
    onLogin: (state, action) => {
      const { username, password } = action.payload;
      if (username.trim().length < 0 || password.trim().length < 0) {
        return;
      }
      state.isVerify = true;
    },
    onLogOut: (state) => {
      state = initialValue;
    },
    setKarzinka: (state, action) => {
      const filterArr = state.karzinka.filter(
        (e) => e.name === action.payload.name
      );
      if (filterArr.length > 0) {
        state.karzinka = state.karzinka.map((e) => {
          if (e.name === filterArr[0].name) return { ...e, count: e.count + 1 };
          else return e;
        });
        return;
      }
      state.karzinka = [...state.karzinka, action.payload];
    },
    delKarzinka: (state, action) => {
      if (action.payload) {
        state.karzinka = state.karzinka.filter((e) => e.id !== action.payload);
        return;
      }
      state.karzinka = [];
    },
  },
});

export const { onLogOut, onLogin, setKarzinka, delKarzinka } =
  orderSlice.actions;

export default orderSlice.reducer;

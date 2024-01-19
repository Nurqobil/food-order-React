import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";

const toolkit = configureStore({ reducer: orderSlice });

export default toolkit;

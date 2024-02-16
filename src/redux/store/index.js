import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reduces/reduceAddSong";

const store = configureStore({ reducer: reducer });

export default store;

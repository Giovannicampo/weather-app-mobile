import { createSlice } from "@reduxjs/toolkit";
import { Location } from "../Weather/dto";

interface AppState {
  welcome: boolean;
}

const initialState: AppState = {
  welcome: true
};

const stateSlice = createSlice({
  name: "state/slice",
  initialState,
  reducers: {
    setWelcomeTrue: (state) => {
      state.welcome = true;
    },
    setWelcomeFalse: (state) => {
      state.welcome = false;
    }
  },
});

export const { setWelcomeTrue, setWelcomeFalse } = stateSlice.actions;

export default stateSlice.reducer;

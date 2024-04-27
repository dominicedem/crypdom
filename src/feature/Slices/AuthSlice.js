import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  twitterModal: false,
  proceedModal: false,
  tweetTask: false,
  roulette: false,
  buy: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModalWindow(state, action) {
      state.twitterModal = action.payload;
    },
    openProceedModal(state, action) {
      state.proceedModal = action.payload;
    },
    openTweetTask(state, action) {
      state.tweetTask = action.payload;
    },
    openRoulette(state, action) {
      state.roulette = action.payload;
    },
    openBuy(state, action) {
      state.buy = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  openModalWindow,
  openProceedModal,
  openTweetTask,
  openRoulette,
  openBuy,
  logedIn,
} = authSlice.actions;

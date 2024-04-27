import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlur: false,
  isLoggedOut: false,
  isAirdrop: false,
  isAirdropWarning: false,
  isClaim: false,
  retweetLink: "",
  claimFee: null,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    activateBlur(state, action) {
      state.isBlur = action.payload;
    },
    activateIsLoggedOut(state, action) {
      state.isLoggedOut = action.payload;
    },
    activateIsAirdrop(state, action) {
      state.isAirdrop = action.payload;
    },
    activateIsClaim(state, action) {
      state.isClaim = action.payload;
    },
    activateIsAirdropWarning(state, action) {
      state.isAirdropWarning = action.payload;
    },
    activateRetweetLink(state, action) {
      state.retweetLink = action.payload;
    },
    activateClaimFee(state, action) {
      state.claimFee = action.payload;
    },
  },
});

export default layoutSlice.reducer;
export const {
  activateBlur,
  activateIsLoggedOut,
  activateIsAirdrop,
  activateIsAirdropWarning,
  activateIsClaim,
  activateRetweetLink,
  activateClaimFee,
} = layoutSlice.actions;

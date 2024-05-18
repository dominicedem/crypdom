import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connection: null,
  wallet: null,
  paySolFunc: null,
  claimToken: false,
  isClaimModal: false,
  isPresale: false,
  isPresaleModal: false,
  solPrice: "",
  settings: false,
  route: false,
  WBaseEth: false,
  notify: false,
};

const TokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateConnection(state, action) {
      state.connection = action.payload;
    },
    updateWallet(state, action) {
      state.connection = action.payload.adapter;
    },
    payFee(state, action) {
      state.paySolFunc = action.payload;
    },
    updataClaimFunction(state, action) {
      state.claimToken = action.payload;
    },
    updateIsClaimModal(state, action) {
      state.isClaimModal = action.payload;
    },
    updateIsPresale(state, action) {
      state.isPresale = action.payload;
    },
    updateIsPresaleModal(state, action) {
      state.isPresaleModal = action.payload;
    },
    updateSolPrice(state, action) {
      state.solPrice = action.payload;
    },
    updateSettings(state, action) {
      state.settings = action.payload;
    },
    updateNotify(state, action) {
      state.notify = action.payload;
    },
    updateRoute(state) {
      if (!state.route) {
        state.route = true;
      } else state.route = false;
    },
    updateWBaseEth(state) {
      if (!state.WBaseEth) {
        state.WBaseEth = true;
      } else state.WBaseEth = false;
    },
  },
});

export default TokenSlice.reducer;
export const {
  updateConnection,
  updateWallet,
  payFee,
  updataClaimFunction,
  updateIsClaimModal,
  updateIsPresale,
  updateIsPresaleModal,
  updateSolPrice,
  updateSettings,
  updateNotify,
  updateRoute,
  updateWBaseEth,
} = TokenSlice.actions;

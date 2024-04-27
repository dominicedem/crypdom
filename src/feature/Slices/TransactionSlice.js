import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionSuccess: false,
  transactionFail: false,
  connect: false,
  ticket: "",
  UserTicketData: "",
  rollTicket: false,
  boughtTicketSuccessData: "",
  finished: false,
  warning: false,
  openNetworks: false,
  choose: true,
  typed: false,
  currentToken1: {
    symbol: "ETH",
    logo: "/ethereum].png",
  },
  currentToken2: {
    symbol: "CRD",
    logo: "/logo.png",
  },
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransactionSuccess(state, action) {
      state.transactionSuccess = action.payload;
    },
    updateTransactionFail(state, action) {
      state.transactionFail = action.payload;
    },
    updateConnect(state, action) {
      state.connect = action.payload;
    },
    updateUserTicketData(state, action) {
      state.UserTicketData = action.payload;
    },
    updateTicketType(state, action) {
      state.ticket = action.payload;
    },
    updateRollTicket(state, action) {
      state.rollTicket = action.payload;
    },
    updateBoughtTicket(state, action) {
      state.boughtTicketSuccessData = action.payload;
    },
    updateFinishedSpin(state, action) {
      state.finished = action.payload;
    },
    updateWarning(state, action) {
      state.warning = action.payload;
    },
    updateOpenNetwork(state, action) {
      state.openNetworks = action.payload;
    },
    updateCurrentToken1(state, action) {
      state.currentToken1 = action.payload;
    },
    updateCurrentToken2(state, action) {
      state.currentToken2 = action.payload;
    },
    updateChoose(state, action) {
      state.choose = action.payload;
    },
    updateTyped(state, action) {
      state.typed = action.payload;
    },
  },
});

export default transactionSlice.reducer;
export const {
  updateTransactionSuccess,
  updateTransactionFail,
  updateConnect,
  updateTicketType,
  updateUserTicketData,
  updateRollTicket,
  updateBoughtTicket,
  updateFinishedSpin,
  updateOpenNetwork,
  updateWarning,
  updateCurrentToken1,
  updateCurrentToken2,
  updateChoose,
  updateTyped,
} = transactionSlice.actions;

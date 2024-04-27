import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewPoint: 0,
  likePoint: 0,
  commentPoint: 0,
  quotePoint: 0,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateViewPoint(state, action) {
      state.viewPoint = action.payload;
    },
    updateLikePoint(state, action) {
      state.likePoint = action.payload;
    },
    updateCommentPoint(state, action) {
      state.commentPoint = action.payload;
    },
    updateQuotePoint(state, action) {
      state.quotePoint = action.payload;
    },
  },
});

export default DashboardSlice.reducer;
export const {
  updateViewPoint,
  updateLikePoint,
  updateCommentPoint,
  updateQuotePoint,
} = DashboardSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaders: true,
  developement: false,
  marketing: false,
  creative: false,
  menu: false,
  toggleMenu: true,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateLeaders(state, action) {
      state.leaders = action.payload;
      state.developement = false;
      state.marketing = false;
      state.creative = false;
    },
    updateDevelopement(state, action) {
      state.developement = action.payload;
      state.leaders = false;
      state.marketing = false;
      state.creative = false;
    },
    updateMarketing(state, action) {
      state.marketing = action.payload;
      state.leaders = false;
      state.developement = false;
      state.creative = false;
    },
    updateCreative(state, action) {
      state.creative = action.payload;
      state.leaders = false;
      state.developement = false;
      state.marketing = false;
    },
    updateMenu(state, action) {
      state.menu = action.payload;
    },
    updateToggleMenu(state, action) {
      state.toggleMenu = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const {
  updateDevelopement,
  updateMarketing,
  updateCreative,
  updateLeaders,
  updateMenu,
  updateToggleMenu,
} = mainSlice.actions;

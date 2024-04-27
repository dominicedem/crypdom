import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: true,
  tweet: false,
  retweet: false,
  logedIn: false,
  twitterConnected: false,
  connectTwitter: false,
  token: "",
  follow: false,
  activate: false,
  UserDatas: "",
  isCompleteTask: false,
  isUserTicket: false,
  newTicketRemaining: "",
  usernames: "",
  twitterId: "",
  displayName: "",
  interactionPoint: "",
  photos: "",
  followPage: false,
  newTickets: "",
  refId: "",
  a: false,
  b: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNewUser(state, action) {
      state.newUser = action.payload;
    },
    setNewUsers(state, action) {
      state.UserDatas = action.payload;
    },
    setTweet(state, action) {
      state.tweet = action.payload;
    },
    setFollowPage(state, action) {
      state.followPage = action.payload;
    },
    setRetweet(state, action) {
      state.retweet = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setConnectTwitter(state, action) {
      state.twitterConnected = action.payload;
    },
    setSuccessfulTwitterConnect(state, action) {
      state.connectTwitter = action.payload;
    },
    setLogedIn(state, action) {
      state.logedIn = action.payload;
    },
    setFollowModal(state, action) {
      state.follow = action.payload;
    },
    setSuccessfullyActivate(state, action) {
      state.activate = action.payload;
    },
    setIsCompleteTask(state, action) {
      state.isCompleteTask = action.payload;
    },
    setIsUserTicket(state, action) {
      state.isUserTicket = action.payload;
    },
    setIsNewTicketRemaining(state, action) {
      state.newTicketRemaining = action.payload;
    },
    setUsername(state, action) {
      state.usernames = action.payload;
    },
    setTwitter(state, action) {
      state.twitterId = action.payload;
    },
    setDisplay(state, action) {
      state.displayName = action.payload;
    },
    setInteraction(state, action) {
      state.interactionPoint = action.payload;
    },
    setPhoto(state, action) {
      state.photos = action.payload;
    },
    setNewTicketDatas(state, action) {
      state.newTickets = action.payload;
    },
    setA(state, action) {
      state.a = action.payload;
    },
    setB(state, action) {
      state.b = action.payload;
    },
    setRefId(state, action) {
      state.refId = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setIsCompleteTask,
  setNewUser,
  setTweet,
  setRetweet,
  setLogedIn,
  setConnectTwitterModal,
  setConnectTwitter,
  setToken,
  setFollowModal,
  setSuccessfullyActivate,
  setNewUsers,
  setSuccessfulTwitterConnect,
  setIsUserTicket,
  setIsNewTicketRemaining,
  setUsername,
  setTwitter,
  setDisplay,
  setInteraction,
  setPhoto,
  setFollowPage,
  setNewTicketDatas,
  setA,
  setB,
  setRefId,
} = userSlice.actions;

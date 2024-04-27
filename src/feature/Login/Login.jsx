import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  openBuy,
  openModalWindow,
  openProceedModal,
  openRoulette,
  openTweetTask,
} from "../Slices/AuthSlice";
import {
  setA,
  setB,
  setConnectTwitter,
  setDisplay,
  setFollowModal,
  setFollowPage,
  setInteraction,
  setIsCompleteTask,
  setIsNewTicketRemaining,
  setIsUserTicket,
  setLogedIn,
  setNewUser,
  setNewUsers,
  setPhoto,
  setRetweet,
  setSuccessfullyActivate,
  setToken,
  setTweet,
  setTwitter,
  setUsername,
} from "../Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import {
  updateCommentPoint,
  updateLikePoint,
  updateQuotePoint,
  updateViewPoint,
} from "../Slices/DashboardSlice";
import {
  updateBoughtTicket,
  updateConnect,
  updateFinishedSpin,
  updateRollTicket,
  updateTicketType,
  updateUserTicketData,
  updateWarning,
} from "../Slices/TransactionSlice";
import { updateMenu, updateToggleMenu } from "../Slices/MainSlice";
import {
  activateBlur,
  activateClaimFee,
  activateIsAirdrop,
  activateIsAirdropWarning,
  activateIsClaim,
  activateIsLoggedOut,
  activateRetweetLink,
} from "../Slices/AppSlice";
import {
  updataClaimFunction,
  updateIsClaimModal,
  updateIsPresale,
  updateIsPresaleModal,
} from "../Slices/TokenSlice";

const Logins = styled.div`
  font-size: 1.6rem;
  color: #222;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  &:hover {
    background: -webkit-linear-gradient(#d8d8d8, #969595);
  }
`;
const Logout = styled.div`
  border: none;
  cursor: pointer;
  background: none;
  border: 1px solid var(--secondary_text_color);
  color: var(--primary_text_color);
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  transition: all 0.3s;
  &:hover {
    color: var(--hover_color);
  }
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logedIn } = useSelector((state) => state.userData);
  function openModal() {
    !logedIn ? dispatch(openModalWindow(true)) : dispatch(logedIn(false));
  }
  function handleLogout() {
    navigate("/");
    dispatch(setTweet(false));
    dispatch(setRetweet(false));
    dispatch(setLogedIn(false));
    dispatch(setNewUser(true));
    dispatch(setNewUsers(""));
    dispatch(setFollowModal(false));
    dispatch(setSuccessfullyActivate(false));
    dispatch(setToken(false));
    dispatch(setConnectTwitter(false));
    dispatch(openModalWindow(false));
    dispatch(openProceedModal(false));
    dispatch(openTweetTask(false));
    dispatch(openRoulette(false));
    dispatch(openBuy({}));
    dispatch(updateViewPoint(0));
    dispatch(updateLikePoint(0));
    dispatch(updateCommentPoint(0));
    dispatch(updateQuotePoint(0));
    dispatch(updateConnect(false));
    dispatch(updateTicketType(""));
    dispatch(updateUserTicketData(""));
    dispatch(updateMenu(false));
    dispatch(updateToggleMenu(true));
    dispatch(updateRollTicket(false));
    dispatch(updateFinishedSpin(false));
    dispatch(updateWarning(false));
    dispatch(updataClaimFunction(false));
    dispatch(updateIsClaimModal(false));
    dispatch(updateTicketType(""));
    dispatch(activateIsLoggedOut(true));
    dispatch(updateBoughtTicket(""));
    dispatch(updateIsPresale(false));
    dispatch(updateIsPresaleModal(false));
    dispatch(activateBlur(false));
    dispatch(activateIsAirdrop(false));
    dispatch(activateIsClaim(false));
    dispatch(activateIsAirdropWarning(false));
    dispatch(activateRetweetLink(""));
    dispatch(activateClaimFee(null));
    dispatch(setIsCompleteTask(false));
    dispatch(setIsUserTicket(false));
    dispatch(setIsNewTicketRemaining(""));
    dispatch(setUsername(""));
    dispatch(setTwitter(""));
    dispatch(setDisplay(""));
    dispatch(setInteraction(""));
    dispatch(setPhoto(""));
    dispatch(setFollowPage(false));
    dispatch(setA(false));
    dispatch(setB(false));
  }
  return (
    <>
      {logedIn ? (
        <Logout onClick={() => handleLogout()}>Logout</Logout>
      ) : (
        <Logins onClick={() => openModal()}>Login</Logins>
      )}
    </>
  );
}

export default Login;

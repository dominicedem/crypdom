import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Nav from "../navigation/Nav";
import Partners from "../Partners/Partners";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConnectTwitter from "../Main/ConnectTwitter/ConnectTwitter";
import {
  openModalWindow,
  openTweetTask,
  openRoulette,
  openProceedModal,
} from "../Slices/AuthSlice";
import {
  activateBlur,
  activateClaimFee,
  activateIsAirdrop,
  activateIsClaim,
  activateRetweetLink,
} from "../Slices/AppSlice";
import TweetTasks from "../Main/ConnectTwitter/TweetTasks";
import MenuBar from "../MenuBar/MenuBar";
import { useQuery } from "@tanstack/react-query";
import ProjectStart from "../../service/ApiProjectStart";
import TransactionError from "../../pages/Error/TransactionError";

const Applayoutbox = styled.div`
  display: grid;
  grid-template-columns: 17vw auto;
  grid-template-rows: 10vh auto 5vh;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 900px) {
    height: 100vh;
    display: grid;
    grid-template-rows: 10vh auto 5vh;
    grid-template-columns: 19vw auto;
    position: relative;
  }
  @media (max-width: 800px) {
    display: grid;
    height: 100vh;
    grid-template-rows: 10vh auto 5vh;
    grid-template-columns: auto;
    position: relative;
  }
  @media (max-width: 599px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10vh auto 5vh;
    height: 100vh;
    position: relative;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10vh auto;
    height: 100vh;
    position: relative;
  }
`;

const NavStyle = styled.div`
  grid-column: 1/-1;
  background: var(--background_color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-bottom: 0.1rem solid #444;
`;
const OverlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  position: absolute;
  z-index: 1000;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ConnectTwitterBox = styled.div``;
const MenuBarStyle = styled.div`
  display: none;
  position: absolute;
  left: 0%;
  top: 10vh;
  background: var(--background_color);
  z-index: 10;
  transition: all 0.3s ease-in;
  @media (max-width: 800px) {
    display: block;
    height: 90vh;
  }
`;
const SideBarStyle = styled.div`
  background: var(--background_color);
  @media (max-width: 800px) {
    display: none;
  }
`;
const MainStyle = styled.div`
  overflow-y: scroll;
  background: var(--background_color);
  @media (max-width: 500px) {
    height: 90vh;
  }
`;
const Partnersstyle = styled.div`
  grid-column: 1/-1;
  background: var(--background_color);
`;

const ErrorBox = styled.div`
  position: fixed;
  top: 8%;
  left: 60%;
  z-index: 100;
  transform: translateX(-50%);
  @media (max-width: 800px) {
    left: 50%;
  }
`;
const openMenuBar = {
  transform: "translateX(0)",
};
const closeMenuBar = {
  transform: "translateX(-100%)",
};
const activateBlurs = {
  filter: "blur(4px)",
};
const deactivateBlur = {
  filter: "blur(0)",
};

function AppLayout() {
  const { menu } = useSelector((state) => state.mainData);
  const { isBlur } = useSelector((state) => state.applayout);
  const { twitterModal, tweetTask } = useSelector((state) => state.authData);
  const { transactionSuccess, transactionFail, connect, warning } = useSelector(
    (state) => state.transactionData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // data && dispatch(activateIsAirdrop(data.setting.projectStarted));
    // data && dispatch(activateIsClaim(data.setting.tokenClaimingPeriod));
    // data && dispatch(activateRetweetLink(data.setting.retweetLink));
    // data && dispatch(activateClaimFee(data.setting.claimFee));
    window.addEventListener("click", (e) => {
      [
        "wallet-adapter-modal-button-close",
        "",
        "abcdefghijklmnopqrstuvwsyz",
        "wallet-adapter-modal-overlay",
      ].includes(e.target.classList.value) && dispatch(activateBlur(false));
      e.target.classList.contains("overLay") && closeModal();
    });
  });

  function closeModal() {
    dispatch(openModalWindow(false));
    dispatch(openTweetTask(false));
    dispatch(openRoulette(false));
    dispatch(openProceedModal(false));
    dispatch(activateBlur(false));
  }
  return (
    <>
      <Applayoutbox
        style={
          isBlur || twitterModal || tweetTask ? activateBlurs : deactivateBlur
        }
      >
        <NavStyle>
          <Nav />
        </NavStyle>
        <SideBarStyle>
          <SideBar />
        </SideBarStyle>
        <MenuBarStyle style={menu ? openMenuBar : closeMenuBar}>
          <MenuBar />
        </MenuBarStyle>
        <MainStyle>
          <Outlet />
        </MainStyle>
        <Partnersstyle>
          <Partners />
        </Partnersstyle>
      </Applayoutbox>
      {twitterModal && (
        <OverlayBox className="overLay">
          <ConnectTwitterBox>
            <ConnectTwitter generallogin={true} />
          </ConnectTwitterBox>
        </OverlayBox>
      )}
      {tweetTask && (
        <OverlayBox className="overLay">
          <TweetTasks />
        </OverlayBox>
      )}
      {transactionSuccess && (
        <ErrorBox>
          <TransactionError success={transactionSuccess} />
        </ErrorBox>
      )}
      {transactionFail && (
        <ErrorBox>
          <TransactionError fail={transactionFail} />
        </ErrorBox>
      )}
      {connect && (
        <ErrorBox>
          <TransactionError connect={connect} />
        </ErrorBox>
      )}
      {warning && (
        <ErrorBox>
          <TransactionError warning={warning} />
        </ErrorBox>
      )}
    </>
  );
}

export default AppLayout;

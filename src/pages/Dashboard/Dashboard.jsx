import styled from "styled-components";
import CalculatorSection from "./CalculatorSection";
import GeneralStat from "./GeneralStat";
import Topuser from "./Topuser";
import Points from "./Points";
import { useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TweetTasks from "../../feature/Main/ConnectTwitter/TweetTasks";
import ConnectTwitter from "../../feature/Main/ConnectTwitter/ConnectTwitter";
import { RiTwitterXLine } from "react-icons/ri";

import {
  setConnectTwitter,
  setDisplay,
  setFollowModal,
  setInteraction,
  setLogedIn,
  // setNewUsers,
  setPhoto,
  setRetweet,
  setSuccessfulTwitterConnect,
  setToken,
  setTweet,
  setTwitter,
  setUsername,
} from "../../feature/Slices/UserSlice";
// import confirmUser from "../../service/ApiConfirmUser";
import TransactionError from "../Error/TransactionError";
import { MdCancel } from "react-icons/md";

const DashboardBox = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 3rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  @media (max-width: 800px) {
    width: 90vw;
  }
  @media (max-width: 530px) {
    width: 90vw;
  }
`;
const Analysis = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  row-gap: 8rem;
  column-gap: 3rem;
  width: 100%;
  @media (max-width: 860px) {
    column-gap: 1.8rem;
    row-gap: 8rem;
  }
  @media (max-width: 800px) {
    row-gap: 10rem;
  }
  @media (max-width: 700px) {
    row-gap: 10rem;
    grid-template-columns: 1fr;
  }
`;
const DashboardSubBox = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 575px) {
    width: 95%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ProfileBox = styled.div`
  box-shadow: 0 0.5rem 1rem 0 #000;
  border-radius: 3rem;
  width: 100%;
  overflow: hidden;
  border: 0.1px solid #49494d;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 575px) {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    border: 0.1px solid #49494d;
    transform: scale(1.005);
  }
`;
const GraphBox = styled.div`
  width: 100%;
  @media (max-width: 575px) {
    width: 100%;
  }
`;
const OverlayBoxs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1100px) {
    left: 60%;
  }
  @media (max-width: 800px) {
    left: 50%;
  }
`;
const ErrorBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
`;
const FollowBox = styled.div`
  width: 40vw;
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -45%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #666;
  /* background-color: #141414; */
  box-shadow: 0 1rem 1rem 0 #000a;
  border-radius: 1rem;
  padding: 2.5rem 4rem 4rem 4rem;
  border-left: 4px solid #141414;
  border-bottom: 4px solid #141414;
`;
const FollowBoxs = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #141414;
  box-shadow: 0 1rem 1rem 0 #000a;
  border-radius: 1rem;
  padding: 1.4rem 2.4rem;
  border-left: 4px solid #333;
  border-bottom: 4px solid #333;
`;
const FollowText = styled.div`
  font-size: 1.7rem;
  color: #b1b1b1;
`;
const FollowCta = styled.div`
  color: #b1b1b1;
  font-size: 1.6rem;
`;
const FollowTexts = styled.div`
  font-size: 1.7rem;
  color: #111;
`;
const FollowCtas = styled.div`
  color: #222;
`;
const TopUserBox = styled.div`
  width: 100%;
  @media (max-width: 460px) {
    width: 98%;
  }
`;
// const MobileUser = styled.span`
//   display: none;
//   @media (max-width: 575px) {
//     display: inline-block;
//     color: #ccc;
//     font-size: 2.2rem;
//   }
// `;
// const MobilePoint = styled.div`
//   display: none;
//   @media (max-width: 575px) {
//     display: inline-block;
//     margin: 3rem 0;
//   }
// `;
const CancelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-bottom: 2rem;
`;
const CancelText = styled.div`
  font-size: 1.8rem;
  color: #111;
`;
const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 50%;
  background: linear-gradient(#ccc, #a3a3a3);
  border-radius: 3rem;
  padding: 0.8rem 1.3rem;
  font-size: 1.6rem;
  color: #222;
  align-self: center;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(#d8d8d8, #969595);
  }
`;

const activateBlurs = {
  filter: "blur(4px)",
};
const deactivateBlur = {
  filter: "blur(0)",
};
const twitterIconStyle = {
  fontSize: "2.5rem",
  color: "#222",
};
const iconStyle = {
  fontSize: "2.5rem",
  color: "#222",
  cursor: "pointer",
};

function Dashboard() {
  const [queryString] = useSearchParams();
  const dispatch = useDispatch();
  const {
    tweet,
    retweet,
    logedIn,
    twitterConnected,
    activate,
    // followPage,
    follow,
    UserDatas,
    connectTwitter,
    isCompleteTask,
  } = useSelector((state) => state.userData);
  const { transactionSuccess, transactionFail, connect } = useSelector(
    (state) => state.transactionData
  );

  const username = queryString.get("username");
  const token = queryString.get("token");
  const photo = queryString.get("photos");
  const twitterId = queryString.get("twitterId");
  const displayName = queryString.get("displayName");
  const interactionPoint = queryString.get("interactionPoint");

  // const { data: confirmUserDatas, isFetched } = useQuery({
  //   queryKey: ["confirmData"],
  //   queryFn: () => confirmUser(token),
  // });
  // console.log(confirmUserDatas, token);
  const loginSuccefully = useCallback(() => {
    dispatch(setTweet(true));
    dispatch(setRetweet(true));
    dispatch(setLogedIn(true));
  }, [dispatch]);

  const handleFollow = useCallback(() => {
    follow && dispatch(setFollowModal(false));
    window.open(import.meta.env.VITE_TwitterPage, "_blank");
  }, [dispatch, follow]);

  const handleSets = useCallback(() => {
    username && dispatch(setConnectTwitter(true));
    username && dispatch(setSuccessfulTwitterConnect(true));
    setTimeout(() => {
      dispatch(setSuccessfulTwitterConnect(false));
    }, 3000);
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(setToken(token));
    dispatch(setUsername(username));
    dispatch(setTwitter(twitterId));
    dispatch(setDisplay(displayName));
    dispatch(setInteraction(interactionPoint));
    dispatch(setPhoto(photo));
    handleSets();
    // twitterConnected && confirmUserDatas?.user.username && loginSuccefully();
    // confirmUserDatas &&
    //   twitterConnected &&
    //   dispatch(setNewUsers(confirmUserDatas));
  }, [
    dispatch,
    username,
    photo,
    twitterId,
    displayName,
    interactionPoint,
    token,
    handleSets,
    loginSuccefully,
    // confirmUserDatas,
    twitterConnected,
    logedIn,
  ]);

  return (
    <>
      <DashboardBox
        style={
          !tweet || !retweet || !logedIn || !twitterConnected
            ? activateBlurs
            : deactivateBlur
        }
      >
        <Analysis>
          <DashboardSubBox>
            <Points
              username={UserDatas ? UserDatas.user.username : "null"}
              userData={UserDatas ? UserDatas : null}
            />
          </DashboardSubBox>
          <ProfileBox>
            <Profile
              src={UserDatas ? `${UserDatas.user.photo}` : "/dashboard.jpeg"}
              alt="user-profile"
            />
          </ProfileBox>
          <GraphBox>
            <CalculatorSection />
          </GraphBox>
          <TopUserBox>
            <Topuser topUserData={UserDatas ? UserDatas : null} />
          </TopUserBox>
        </Analysis>
        <GeneralStat />
      </DashboardBox>
      {twitterConnected ? null : (
        <OverlayBoxs className="">
          <ConnectTwitter />
        </OverlayBoxs>
      )}
      {/* {!confirmUserDatas && twitterConnected && isFetched ? (
        tweet && retweet && followPage && logedIn ? null : (
          <OverlayBoxs className="">
            <TweetTasks username={username} />
          </OverlayBoxs>
        )
      ) : null}{" "} */}
      {activate && (
        <ErrorBox>
          <TransactionError activate={true} />
        </ErrorBox>
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
      {connectTwitter && (
        <ErrorBox>
          <TransactionError connected={true} />
        </ErrorBox>
      )}
      {follow && (
        <FollowBox>
          <CancelBox>
            <CancelText>@{username}</CancelText>
            <MdCancel
              onClick={() => dispatch(setFollowModal(false))}
              style={iconStyle}
            />
          </CancelBox>
          <FollowTexts>You have not followed our twitter</FollowTexts>
          <FollowTexts>
            Click to follow and wait for 5mins to activate!
          </FollowTexts>
          <Follow onClick={() => handleFollow()}>
            <FollowCtas>Follow twitter</FollowCtas>
            <RiTwitterXLine style={twitterIconStyle} />
          </Follow>
        </FollowBox>
      )}
      {isCompleteTask && (
        <FollowBoxs>
          <FollowText>Complete the following task to activate</FollowText>
          <FollowCta>Follow, Tweet and retweet</FollowCta>
        </FollowBoxs>
      )}
    </>
  );
}

export default Dashboard;

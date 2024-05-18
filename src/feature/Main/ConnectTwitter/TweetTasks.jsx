import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  setConnectTwitter,
  setFollowModal,
  setFollowPage,
  setRetweet,
  setTweet,
} from "../../Slices/UserSlice";
import { useNavigate } from "react-router-dom";

const ConnectTwitterBoxs = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.4rem;
  border-radius: 2rem;
  background-color: #141414;
  box-shadow: 0 1rem 1rem 0 #000a;
  line-height: 1.4;
  @media (max-width: 700px) {
    padding: 2rem;
    max-width: 50rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
    max-width: 45rem;
  }
`;
const ConnectTwitterHead = styled.p`
  font-size: 2.2rem;
  cursor: pointer;
  color: #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Connect = styled.span`
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
const ConnectTwitterText = styled.p`
  font-size: 1.8rem;
  color: #b1b1b1;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const ConnectTwitterButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 50%;
  background: linear-gradient(#ccc, #a3a3a3);
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: #222;
  align-self: center;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(#d8d8d8, #969595);
  }
  @media (max-width: 600px) {
    padding: 0.8rem 1.5rem;
  }
`;

const iconStyle = {
  fontSize: "2.5rem",
  color: "#ccc",
};
const twitterIconStyle = {
  fontSize: "2.5rem",
  color: "#222",
};
// const ActivateIconStyle = {
//   fontSize: "2.5rem",
//   color: "#aaa",
// };

function TweetTasks({ username }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { retweetLink } = useSelector((state) => state.applayout);

  function handleCancel(isFollowed) {
    isFollowed !== "notFollowed" && dispatch(setConnectTwitter(false));
    isFollowed !== "notFollowed" && navigate("/");
    isFollowed === "notFollowed" && dispatch(setFollowModal(true));
    // remove();
  }

  function handleVerifyTweet() {
    window.open(import.meta.env.VITE_Tweet, "_blank");

    dispatch(setTweet(true));
  }
  function handleVerifyRetweet() {
    window.open(retweetLink, "_blank");
    dispatch(setRetweet(true));
  }
  function handleVerifyFollow() {
    window.open(import.meta.env.VITE_TwitterPage, "_blank");
    dispatch(setFollowPage(true));
  }

  function verify(tweet) {
    tweet === "tweet" && handleVerifyTweet();
    tweet === "retweet" && handleVerifyRetweet();
    tweet === "follow" && handleVerifyFollow();
  }
  return (
    <ConnectTwitterBoxs>
      {
        <>
          <ConnectTwitterHead>
            @{username}
            <MdCancel onClick={() => handleCancel()} style={iconStyle} />
          </ConnectTwitterHead>
          <ConnectTwitterText>
            Perform the following actions to activate your CrypDom profile
          </ConnectTwitterText>
          .
          <ConnectTwitterButton onClick={() => verify("follow")}>
            <Connect>
              <Connect>follow</Connect>
            </Connect>
            <RiTwitterXLine style={twitterIconStyle} />
          </ConnectTwitterButton>
          <ConnectTwitterButton onClick={() => verify("tweet")}>
            <Connect>
              <Connect>Tweet</Connect>
            </Connect>
            <RiTwitterXLine style={twitterIconStyle} />
          </ConnectTwitterButton>
          <ConnectTwitterButton onClick={() => verify("retweet")}>
            <Connect>Retweet</Connect>
            <AiFillInteraction style={twitterIconStyle} />
          </ConnectTwitterButton>
        </>
      }
    </ConnectTwitterBoxs>
  );
}
export default TweetTasks;

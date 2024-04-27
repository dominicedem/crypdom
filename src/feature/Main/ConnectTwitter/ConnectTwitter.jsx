import { Link, useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { openModalWindow } from "../../Slices/AuthSlice";
import { setConnectTwitter } from "../../Slices/UserSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const ConnectTwitterBoxs = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.4rem;
  border-radius: 2rem;
  background: linear-gradient(#141414e9, #141414e9), url("/hill.jpeg");
  background-size: cover;
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
const ConnectTwitterHead = styled.div`
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
  font-size: 1.8rem;
  color: #222;
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
const TermsCondition = styled.p`
  font-size: 1.4rem;
  color: #aaa;
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
const linkStyle = {
  color: "#777",
  paddingBottom: "0.25rem",
};

function ConnectTwitter({ generallogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleconnectTwitter() {
    window.location.href = import.meta.env.VITE_authTwitter;
  }
  function handleCancel() {
    generallogin ? dispatch(openModalWindow(false)) : navigate("/");
    dispatch(setConnectTwitter(false));
  }
  return (
    <ConnectTwitterBoxs>
      <ConnectTwitterHead>
        Login
        <MdCancel onClick={() => handleCancel()} style={iconStyle} />
      </ConnectTwitterHead>
      <ConnectTwitterText>
        To participate, kindly link your Twitter/X account. This step is solely
        for account verification purposes, no posting or modifications will be
        made.
      </ConnectTwitterText>
      <ConnectTwitterButton onClick={() => handleconnectTwitter()}>
        <Connect>Connect</Connect>
        <RiTwitterXLine style={twitterIconStyle} />
      </ConnectTwitterButton>
      <TermsCondition>
        By using CrypDom, you are consenting to abide by our{" "}
        <Link to="/termsCondition" style={linkStyle}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/termsCondition" style={linkStyle}>
          Privacy Policy
        </Link>
      </TermsCondition>
    </ConnectTwitterBoxs>
  );
}
export default ConnectTwitter;

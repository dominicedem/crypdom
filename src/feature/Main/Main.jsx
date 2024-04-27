import styled from "styled-components";
import Slider from "./Slider";
import Footer from "../Footer/Footer";
import Moreinfo from "./Moreinfo";
import TeamSection from "./Team/TeamSection";
import FaqContainer from "../../pages/FAQ/FaqContainer";
import AppliedTo from "./AppliedTo/AppliedTo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateIsLoggedOut } from "../Slices/AppSlice";
import TransactionError from "../../pages/Error/TransactionError";

const Mainbox = styled.div`
  padding-top: 2rem;
  background: #000;
  background-size: cover;
  height: fit-content;
  @media (max-width: 1245px) {
  }
`;
const SliderBox = styled.div`
  padding: 2rem 0 6rem 0;
  display: ${(props) => (!props.desktop ? "none" : "block")};
  @media (max-width: 700px) {
    display: ${(props) => (props.desktop ? "none" : "block")};
  }
`;
const SocialFi = styled.h1`
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 1;
  font-size: 8.2rem;
  margin-bottom: 4rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1129px) {
    font-size: 7.5rem;
  }
  @media (max-width: 979px) {
    font-size: 6.5rem;
  }
  @media (max-width: 445px) {
    font-size: 5.3rem;
  }
`;

const SubHeading = styled.div`
  text-align: center;
  margin-bottom: 7.5rem;
  width: 60%;
  font-size: 2.5rem;
  line-height: 1.4;
  color: var(--secondary_text_color);
`;
const Howitworks = styled.h2`
  text-transform: uppercase;
  text-align: start;
  color: #7e7e7e;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
const LinkInfo = styled.h2`
  text-align: start;
  background-clip: text;
  background: -webkit-linear-gradient(#b4b4b4, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10rem;
  font-size: 4.4rem;
  @media (max-width: 1130px) {
    font-size: 4.2rem;
  }
  @media (max-width: 1000px) {
    font-size: 3.6rem;
  }
  @media (max-width: 459px) {
    font-size: 3.4rem;
  }
  @media (max-width: 445px) {
    font-size: 3rem;
  }
`;
const Maindesbox = styled.div`
  background: linear-gradient(#000e, #000e), url("background.webp");
  background-size: cover;
  padding: 2rem 2rem 8rem 4rem;
  @media (max-width: 460px) {
    padding: 2rem 2rem 8rem 2rem;
  }
`;
const Moreinfobox = styled.div`
  @media (max-width: 1030px) {
    overflow-x: scroll;
  }
  @media (max-width: 492px) {
    overflow-x: scroll;
  }
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rem;
`;
const ErrorBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
`;

const TwitterButton = styled.button`
  border: none;
  color: #222;
  font-size: 2rem;
  border-radius: 4rem;
  padding: 1.2rem 3rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(#eeeeee, #b4b4b4);
  &:hover {
    background: linear-gradient(#d8d8d8, #969595);
  }
  @media (max-width: 500px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.8rem;
  }
  @media (max-width: 445px) {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
  }
  @media (max-width: 435px) {
    padding: 1.2rem 1.8rem;
    font-size: 1.6rem;
  }
`;
const TradeButton = styled.button`
  border: none;
  font-size: 2rem;
  color: #ddd;
  background-color: #272727a4;
  padding: 1.2rem 3rem;
  transition: all 0.3s;
  border-radius: 4rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #2727276a;
  }
  @media (max-width: 500px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.8rem;
  }
  @media (max-width: 445px) {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
  }
  @media (max-width: 435px) {
    padding: 1.2rem 1.8rem;
    font-size: 1.6rem;
  }
`;
const Buttonbox = styled.div`
  display: flex;
  gap: 2rem;
`;

function Main() {
  const { isLoggedOut } = useSelector((state) => state.applayout);
  const dispatch = useDispatch();
  function handleconnect() {
    window.location.href = import.meta.env.VITE_authTwitter;
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch(activateIsLoggedOut(false));
    }, 3000);
  });
  return (
    <Mainbox>
      <SliderBox desktop={true}>
        <Slider desktop={true} />
      </SliderBox>
      <SliderBox desktop={false}>
        <Slider mobile={true} />
      </SliderBox>
      <Maindesbox>
        <IntroSection>
          <SocialFi>The future of socialfi</SocialFi>
          <SubHeading>Link your twitter account to get started.</SubHeading>
          <Buttonbox>
            <TwitterButton onClick={() => handleconnect()}>
              Connect Twitter
            </TwitterButton>
            <Link to="/trade">
              <TradeButton>Trade $CrypDom</TradeButton>
            </Link>
          </Buttonbox>
        </IntroSection>
        <AppliedTo />
        <Howitworks>OUR PLATFORM</Howitworks>
        <LinkInfo>
          CrypDom is a decentralized platform unifying social media and
          decentralized finance on solana
        </LinkInfo>
        <Moreinfobox>
          <Moreinfo />
        </Moreinfobox>
        <TeamSection />
        <FaqContainer />
      </Maindesbox>
      <Footer />
      {isLoggedOut && (
        <ErrorBox>
          <TransactionError isLoggedOut={isLoggedOut} />
        </ErrorBox>
      )}
    </Mainbox>
  );
}

export default Main;

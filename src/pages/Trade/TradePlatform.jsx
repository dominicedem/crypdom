import { useState } from "react";
import styled from "styled-components";

const Picture = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
`;
const Comingsoon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  position: absolute;
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  top: 140%;
  left: 50%;
  color: #ddd;
  transform: translate(-50%, -50%);
  background: -webkit-linear-gradient(#3f3f3f, #1a1a1a);
  clip-path: polygon(
    0 15%,
    45% 15%,
    50% 0,
    55% 15%,
    100% 15%,
    100% 100%,
    0 100%
  );
  @media (max-width: 950px) {
    font-size: 1.8rem;
    padding: 1.5rem 3rem;
    width: 45%;
  }
  @media (max-width: 570px) {
    font-size: 1.6rem;
    padding: 1.3rem 2rem;
    width: 47%;
  }
`;
const TradeLinkBox = styled.div`
  height: 8vh;
  padding: 1rem 2rem;
  position: relative;
  width: 90%;
`;
const TradeLink = styled.a`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ddd;
  background-color: #131313a7;
  border: 0.1px solid #49494d;
  &:link,
  &:active {
    text-decoration: none;
  }
  border-radius: 1rem;
  &:hover {
    background-color: #161616f6;
  }
  &:visited {
    color: #ccc;
    border: 0.1px solid #49494d;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 2rem 1rem;
    width: 88%;
  }
`;

function TradePlatform({ data }) {
  const [openTab, setOpenTab] = useState(false);

  function handleEnter() {
    setOpenTab(true);
  }
  function handleLeave() {
    setOpenTab(false);
  }
  function handleClick() {
    setOpenTab(true);
    window.location.href = `${data.link}`;
  }
  return (
    <TradeLinkBox
      onMouseLeave={() => handleLeave()}
      onMouseOver={() => handleEnter()}
      onClick={() => handleClick()}
    >
      <TradeLink onClick={() => handleClick()}>
        <Picture src={data.source} alt={data.alternative} /> {data.tradeName}
      </TradeLink>
      {openTab && <Comingsoon>Coming soon...</Comingsoon>}
    </TradeLinkBox>
  );
}

export default TradePlatform;

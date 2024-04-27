import styled from "styled-components";
import { GiFamilyHouse } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { HiReceiptTax } from "react-icons/hi";
import { GiWhirlpoolShuriken } from "react-icons/gi";

const TokenomicsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: 0 auto;
  gap: 4rem;
  padding: 0 2rem 0 2rem;
  @media (max-width: 900px) {
    padding: 0 1rem 0 1rem;
  }
  @media (max-width: 700px) {
    width: 78vw;
  }
  @media (max-width: 585px) {
    width: 85vw;
  }
  @media (max-width: 430px) {
    width: 90vw;
  }
`;

const TokenomicsIntro = styled.h1`
  font-size: 4.5rem;
  margin-top: 6rem;
  text-transform: uppercase;
  text-align: center;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TokenomicsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;

const iconStyle = {
  fontSize: "2.5rem",
  color: "#222",
  background: "-webkit-linear-gradient(#aaaaaaef, #707070f0)",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
};

const Economics = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 25vh;
  @media (max-width: 900px) {
    height: 30vh;
  }

  p,
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
    border: 0.1px solid #49494d;
    background-color: #141414e1;
    border-radius: 1.5rem;
    color: #ddd;
    font-size: 2rem;
    font-weight: bold;
    height: 100%;
    transition: all 1s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
  }
  div {
    background: -webkit-linear-gradient(#aaaaaaef, #707070f0);
    color: #111;
    transform: rotateY(180deg);
  }

  &:hover p {
    transform: rotateY(180deg);
  }
  &:hover div {
    transform: rotateY(0);
  }
`;
function Tokenomics() {
  return (
    <TokenomicsSection>
      <TokenomicsIntro>Tokenomics</TokenomicsIntro>
      <TokenomicsBox>
        <Economics>
          <p>
            <GiFamilyHouse style={iconStyle} /> <span>Community</span>
          </p>
          <div>Airdrop-50%</div>
        </Economics>
        <Economics>
          <p>
            <RiTeamFill style={iconStyle} />
            <span>Team</span>
          </p>
          <div>Team-20%</div>
        </Economics>
        <Economics>
          <p>
            <FaTripadvisor style={iconStyle} />
            <span>Advisor</span>
          </p>
          <div>Advisor-5%</div>
        </Economics>
        <Economics>
          <p>
            <BsMegaphoneFill style={iconStyle} />
            <span>Marketing</span>
          </p>
          <div>Marketing-20%</div>
        </Economics>
        <Economics>
          <p>
            <GiWhirlpoolShuriken style={iconStyle} />
            <span>Liquidity</span>
          </p>
          <div>Liquidity-5%</div>
        </Economics>
        <Economics>
          <p>
            <HiReceiptTax style={iconStyle} />
            <span>Taxes</span>
          </p>
          <div>Taxes-3%</div>
        </Economics>
      </TokenomicsBox>
    </TokenomicsSection>
  );
}

export default Tokenomics;

import styled from "styled-components";
import { GrConnect } from "react-icons/Gr";
import { AiFillInteraction } from "react-icons/ai";
import { TiTicket } from "react-icons/ti";
import { HiSpeakerphone } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";

const AirdropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AirdropRules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: -25%;
  align-items: center;
  width: 45vw;
  @media (max-width: 550px) {
    margin-left: 0;
  }
`;
const StepDetails = styled.div`
  width: 100%;
  transform: ${(props) =>
    props.type === "transform" ? "translateX(45%)" : "translate(0)"};
  padding: ${(props) =>
    props.type === "transform"
      ? "1rem 2.3rem 1rem 1rem"
      : "1rem 1rem 1rem 2.3rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6rem;
  border: 0.2px solid #49494d;
  background-color: #141414e1;
  @media (max-width: 800px) {
    width: 55vw;
  }
  @media (max-width: 600px) {
    width: 58vw;
  }
  @media (max-width: 550px) {
    width: 75vw;
    transform: translate(0);
  }
`;

const Icon = styled.div``;
const StepText = styled.p`
  font-size: 1.8rem;
  color: #ddd;
  width: 60%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;
const Number = styled.div`
  font-size: 3.5rem;
  color: #c0c0c0;
  font-weight: bold;
`;
const StepHead = styled.h1`
  font-size: 3.5rem;
  color: #ddd;
  text-transform: uppercase;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 2rem 0 5rem 0;
  @media (max-width: 550px) {
    font-size: 3rem;
  }
  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;
const Step = styled.div`
  font-size: 1rem;
  color: #ddd;
  text-transform: uppercase;
`;
const iconStyle = {
  fontSize: "3rem",
  display: "inline-block",
  color: "#222",
  background: "-webkit-linear-gradient(#aaaaaaef, #707070f0)",
  borderRadius: "50%",
  padding: "1.5rem 1.6rem",
};
function Airdrop({ data }) {
  return (
    <AirdropBox>
      <StepHead>Airdrop Steps(phase one)</StepHead>
      <AirdropRules>
        <StepDetails>
          <Box>
            <Step>step</Step>
            <Number>01</Number>
          </Box>
          <StepText>Stay connected on Twitter</StepText>
          <Icon>
            <RiTwitterXLine style={iconStyle} />
          </Icon>
        </StepDetails>
        <StepDetails type="transform">
          <Icon>
            <GrConnect style={iconStyle} />
          </Icon>
          <StepText>Connect Twitter to earn a follow point</StepText>
          <Box>
            <Step>step</Step>
            <Number>02</Number>
          </Box>
        </StepDetails>
        <StepDetails>
          <Box>
            <Step>step</Step>
            <Number>03</Number>
          </Box>
          <StepText>
            Optional: engage on our twitter page to earn tweets points
          </StepText>
          <Icon>
            <AiFillInteraction style={iconStyle} />
          </Icon>
        </StepDetails>
        <StepDetails type="transform">
          <Icon>
            <TiTicket style={iconStyle} />
          </Icon>
          <StepText>Optional: Purchase Tickets to earn more points</StepText>
          <Box>
            <Step>step</Step>
            <Number>04</Number>
          </Box>
        </StepDetails>
        <StepDetails>
          <Box>
            <Step>step</Step>
            <Number>05</Number>
          </Box>
          <StepText>Spread CrypDom around the World</StepText>
          <Icon>
            <HiSpeakerphone style={iconStyle} />
          </Icon>
        </StepDetails>
        <StepDetails type="transform">
          <Icon>
            <BiTransfer style={iconStyle} />
          </Icon>
          <StepText>Distribution of Tokens</StepText>
          <Box>
            <Step>step</Step>
            <Number>06</Number>
          </Box>
        </StepDetails>
      </AirdropRules>
    </AirdropBox>
  );
}

export default Airdrop;

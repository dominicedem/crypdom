import { useState } from "react";
import styled from "styled-components";

const TicketHeaderBox = styled.div`
  padding: 2rem;
  border-radius: 1.5rem;
  border: 0.1px solid #49494d;
  background: linear-gradient(90deg, #0e0e0edc, #0a0a0af4), url(/casino.jpeg);
  background-size: cover;
  margin-top: 2.5rem;
  filter: grayscale(95%);
  overflow-x: hidden;
`;
const MinorBox = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.3s;
  flex-direction: column;
  justify-content: space-between;
  height: 25vh;
  @media (max-width: 530px) {
    height: 28vh;
  }
`;
const TicketHeader = styled.h1`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.8rem;
  text-transform: uppercase;
  @media (max-width: 530px) {
    font-size: 2.6rem;
  }
  @media (max-width: 405px) {
    font-size: 2.35rem;
  }
`;
const TicketHeaderText = styled.p`
  color: #999;
  font-size: 1.4rem;
`;
const TicketHeaderButton = styled.span`
  background: -webkit-linear-gradient(#aaaaaaef, #707070f0);
  width: 15%;
  text-transform: capitalize;
  font-size: 1.4rem;
  padding: 1.1rem 2rem;
  border-radius: 4rem;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: bold;
  color: #111;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(#9c9c9cee, #5e5e5eef);
  }
  @media (max-width: 1000px) {
    font-size: 1.25rem;
    padding: 1.3rem 2.3rem;
    margin-top: 0.8rem;
  }
  @media (max-width: 985px) {
    font-size: 1.25rem;
  }
  @media (max-width: 733px) {
    font-size: 1.35rem;
    padding: 1.2rem 2.2rem;
    margin-top: 0.8rem;
  }
  @media (max-width: 710px) {
    width: 20%;
  }
  @media (max-width: 510px) {
    width: 25%;
  }
  @media (max-width: 471px) {
    width: 35%;
    padding: 1rem 2rem;
  }
`;
const Howitworksboxs = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25vh;
  @media (max-width: 530px) {
    height: 28vh;
  }
`;
const HowitworksText = styled.div`
  font-size: 1.8rem;
  width: 95%;
  color: #aaa;
  @media (max-width: 400px) {
    font-size: 1.6rem;
    width: 100%;
  }
`;
const HowitworksBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const P = styled.p`
  font-size: 1.8rem;
  width: 95%;
  color: #aaa;
`;
const HowitworksButtonboxs = styled.span`
  display: flex;
  justify-content: space-between;
`;
const TicketHeaderSubBox = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const HowitworksButton = styled.span`
  padding: 1.1rem 2.1rem;
  font-size: 1.5rem;
  border-radius: 4rem;
  color: #111;
  background: -webkit-linear-gradient(#aaaaaaef, #707070f0);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(#9c9c9cee, #5e5e5eef);
  }
  @media (max-width: 500px) {
    padding: 0.8rem 2rem;
  }
`;
function Howitworks() {
  const [toggleTab, setToggleTab] = useState(0);
  function next() {
    toggleTab <= 2 && setToggleTab((cur) => cur + 1);
  }
  function previous() {
    toggleTab >= 0 && setToggleTab((cur) => cur - 1);
  }
  return (
    <TicketHeaderBox>
      {toggleTab === 0 && (
        <MinorBox>
          <TicketHeaderSubBox>
            <TicketHeader>
              buy a ticket to boost <br /> your points
            </TicketHeader>
            <TicketHeaderText>
              Acquire a ticket and test your luck.
            </TicketHeaderText>
          </TicketHeaderSubBox>
          <TicketHeaderButton onClick={() => next()}>
            How it works
          </TicketHeaderButton>
        </MinorBox>
      )}
      {toggleTab === 1 && (
        <Howitworksboxs>
          <HowitworksText>
            At CrypDom, we offer a thrilling experience where you can acquire
            tickets twice per day for a chance to roll the roulette and earn
            valuable points. Here's a step-by-step guide to maximize your
            journey with us
          </HowitworksText>
          <HowitworksButtonboxs>
            <HowitworksButton onClick={() => previous()}>
              Previous
            </HowitworksButton>
            {toggleTab <= 2 && (
              <HowitworksButton onClick={() => next()}>Next</HowitworksButton>
            )}
          </HowitworksButtonboxs>
        </Howitworksboxs>
      )}
      {toggleTab === 2 && (
        <Howitworksboxs>
          <HowitworksBox>
            <P>
              Gold Ticket: Grants you the highest point allocation, providing a
              premium advantage in the roulette game.
            </P>
            <P>
              Silver Ticket: Offers a good point, giving you a solid footing in
              the quest for rewards.
            </P>{" "}
          </HowitworksBox>
          <HowitworksButtonboxs>
            <HowitworksButton onClick={() => previous()}>
              Previous
            </HowitworksButton>
            {toggleTab <= 2 && (
              <HowitworksButton onClick={() => next()}>Next</HowitworksButton>
            )}
          </HowitworksButtonboxs>
        </Howitworksboxs>
      )}
      {toggleTab === 3 && (
        <Howitworksboxs>
          <HowitworksBox>
            <P>
              Bronze Ticket: Presents a moderate point allocation, striking a
              balance between risk and reward.
            </P>{" "}
            <P>
              Regular Ticket: Entry-level ticket with a basic point allocation,
              good for starting the journey.
            </P>
          </HowitworksBox>
          <HowitworksButtonboxs>
            <HowitworksButton onClick={() => previous()}>
              Previous
            </HowitworksButton>
            {toggleTab <= 2 && (
              <HowitworksButton onClick={() => next()}>Next</HowitworksButton>
            )}
          </HowitworksButtonboxs>
        </Howitworksboxs>
      )}
    </TicketHeaderBox>
  );
}

export default Howitworks;

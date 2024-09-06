import styled from "styled-components";
import Howitworks from "./Howitworks";
import { useSelector } from "react-redux";
import Connectwallet from "../../feature/Wallet/Connectwallet";
import ConnectTwitter from "../../feature/Main/ConnectTwitter/ConnectTwitter";
import TicketBoxes from "./TicketBoxes";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
import Roulette from "./Roulette";

const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  padding: 2.5rem;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const TagLine = styled.div`
  width: 45%;
  height: 0.1rem;
  background-color: #333;
`;
const TagText = styled.p`
  font-size: 1.3rem;
  color: #b4b4b4;
`;
const TicketHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Balance = styled.div`
  align-self: end;
  color: #eee;
  background: linear-gradient(#050505, #111);
  border-radius: 0.7rem;
  padding: 1rem 1.5rem;
  font-size: 1.7rem;
  box-shadow: inset 0 0.5rem 0.6rem 0 #222;
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

const OverlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  height: 100%; */
  background: none;
  position: absolute;
  z-index: 1000;
  top: 52.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1000px) {
    left: 60%;
  }
  @media (max-width: 800px) {
    left: 50%;
  }
`;

const activateBlurs = {
  filter: "blur(4px)",
};
const deactivateBlur = {
  filter: "blur(0)",
};
function Ticket() {
  const {
    // transactionSuccess,
    // transactionFail,
    // connect,
    // warning,
    UserTicketData,
  } = useSelector((state) => state.transactionData);
  const { twitterConnected, UserDatas, newTicketRemaining, a, b } = useSelector(
    (state) => state.userData
  );
  const { roulette } = useSelector((state) => state.authData);

  let ENDPOINT = import.meta.env.VITE_BackendEndPoint;
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", () => {});

    socket.on("interaction", (data) => {});

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);
  return (
    <>
      <TicketBox
        style={twitterConnected || roulette ? activateBlurs : deactivateBlur}
      >
        <TicketHead>
          <Balance>
            Ticket Balance:
            {newTicketRemaining && a
              ? newTicketRemaining.data.tickets.totalTickets
              : UserTicketData && b
              ? UserTicketData.totalTickets
              : UserDatas.user?.tickets
              ? UserDatas.user.tickets.totalTickets
              : 0}
          </Balance>
          <Connectwallet />
        </TicketHead>
        <Howitworks />
        <TagBox>
          <TagLine></TagLine>
          <TagText>Ticket</TagText>
          <TagLine></TagLine>
        </TagBox>
        <TicketBoxes />
      </TicketBox>
      {!twitterConnected ? null : (
        <OverlayBoxs className="">
          <ConnectTwitter />
        </OverlayBoxs>
      )}
      {roulette && (
        <OverlayBox className="">
          <Roulette />
        </OverlayBox>
      )}
    </>
  );
}
export default Ticket;

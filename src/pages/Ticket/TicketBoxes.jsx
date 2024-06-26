import styled from "styled-components";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { openBuy } from "../../feature/Slices/AuthSlice";
import {
  updateBoughtTicket,
  updateRollTicket,
  updateTicketType,
  updateWarning,
} from "../../feature/Slices/TransactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import {
  setIsNewTicketRemaining,
  setIsUserTicket,
} from "../../feature/Slices/UserSlice";

const TicketBalanceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const BalanceText = styled.div`
  font-size: 1.8rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.7rem;
  color: #ccc;
  /* background: #131313eb; */
  box-shadow: 0 0.5rem 0.5rem 0 #0007;
`;
const TicketTypeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  @media (max-width: 990px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;
// const TicketTypeMedia = styled.div`
//   display: none;
//   // flex-wrap: wrap;
//   @media (max-width: 598px) {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
// `;
const Buy = styled.p`
  background: ${(props) => (props.type === "gold" ? "#E19118" : "")};
  background: ${(props) => (props.type === "silver" ? "#d7d7d7" : "")};
  background: ${(props) => (props.type === "bronze" ? "#CD6a32" : "")};
  background: ${(props) => (props.type === "regular" ? "#a09e9ece" : "")};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  color: #111;
  border-radius: 0.7rem;
`;
const AmountBox = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.type === "gold" ? "#E19118" : "")};
  color: ${(props) => (props.type === "silver" ? "#d7d7d7" : "")};
  color: ${(props) => (props.type === "bronze" ? "#CD7F32" : "")};
  color: ${(props) => (props.type === "regular" ? "#a09e9ece" : "")};
`;
const TicketType = styled.div`
  background-position: 50% 65%;
  width: 25%;
  height: 15rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: ${(props) => (props.type === "gold" ? "1px solid #E19118" : "")};
  border: ${(props) => (props.type === "silver" ? "1px solid #d7d7d7" : "")};
  border: ${(props) => (props.type === "bronze" ? "1px solid #CD7F32" : "")};
  border: ${(props) => (props.type === "regular" ? "1px solid #a09e9ece" : "")};
  backdrop-filter: grayscale(95%);
  background: linear-gradient(#050505, #111);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 990px) {
    width: 90%;
  }
`;
const TicketTypeText = styled.div`
  width: 100%;
  align-self: end;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const goldiconStyle = {
  fontSize: "5rem",
  color: "#E19118",
  marginTop: "0",
};
const silvericonStyle = {
  fontSize: "5rem",
  color: "#d7d7d7eb",
  marginTop: "0",
};
const bronzeiconStyle = {
  fontSize: "5rem",
  color: "#6a3805f0",
  marginTop: "0",
};
const regulariconStyle = {
  fontSize: "5rem",
  color: "#a09e9ee4",
  marginTop: "0",
};
function TicketBoxes() {
  const dispatch = useDispatch();
  const { UserDatas, isUserTicket, newTicketRemaining, a, b } = useSelector(
    (state) => state.userData
  );
  const { boughtTicketSuccessData, UserTicketData } = useSelector(
    (state) => state.transactionData
  );
  const [goldBalance, setGold] = useState(
    () => UserDatas && UserDatas.availableTicket.goldTicketsLeft
  );
  const [silverBalance, setSilver] = useState(
    () => UserDatas && UserDatas.availableTicket.silverTicketsLeft
  );
  const [bronzeBalance, setBronze] = useState(
    () => UserDatas && UserDatas.availableTicket.bronzeTicketsLeft
  );
  const [regularBalance, setRegular] = useState(
    () => UserDatas && UserDatas.availableTicket.regularTicketsLeft
  );

  function handleBuyTickets(type) {
    const buyAndTransact = {
      buy: true,
      ticket: type,
    };
    dispatch(openBuy(buyAndTransact));
  }

  boughtTicketSuccessData && isUserTicket && NewTicketData();

  function NewTicketData() {
    dispatch(setIsNewTicketRemaining(boughtTicketSuccessData));
    dispatch(updateBoughtTicket(""));
    dispatch(setIsUserTicket(false));
  }

  function openRouletteModal(type) {
    const ticketType = type.split("").reverse().splice(7).reverse().join("");
    if (
      newTicketRemaining && a
        ? newTicketRemaining.data.tickets[type]
        : UserTicketData && b
        ? UserTicketData[type]
        : UserDatas.user?.tickets
        ? UserDatas.user.tickets[type]
        : 0
    ) {
      dispatch(updateTicketType(ticketType));
      dispatch(updateRollTicket(true));
    } else {
      dispatch(updateWarning(true));
      setTimeout(() => dispatch(updateWarning(false)), 4000);
      dispatch(updateTicketType(ticketType));
    }
  }
  let ENDPOINT = import.meta.env.VITE_BackendEndPoint;
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", () => {});

    socket.on("interaction", (data) => {});

    socket.on("ticket", (data) => {
      setGold(() => data && data.ticket.goldTicketsLeft);
      setSilver(() => data && data.ticket.silverTicketsLeft);
      setBronze(() => data && data.ticket.bronzeTicketsLeft);
      setRegular(() => data && data.ticket.regularTicketsLeft);
    });

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT, newTicketRemaining]);
  return (
    <TicketTypeBox>
      <TicketType type="regular">
        <TicketBalanceBox>
          <BalanceText>
            Regular:{" "}
            {newTicketRemaining && a
              ? newTicketRemaining.data.tickets.regularTickets
              : UserTicketData && b
              ? UserTicketData.regularTickets
              : UserDatas.user?.tickets
              ? UserDatas.user.tickets.regularTickets
              : 0}
          </BalanceText>
          <AmountBox type="regular">0.2SOL</AmountBox>
        </TicketBalanceBox>
        <RiVerifiedBadgeFill style={regulariconStyle} />
        <TicketTypeText type="regular">
          <Buy
            type="regular"
            onClick={() => openRouletteModal("regularTickets")}
          >
            Spin
          </Buy>
          {regularBalance && regularBalance > 0 ? (
            <Buy onClick={() => handleBuyTickets("regular")} type="regular">
              BUY
            </Buy>
          ) : (
            <Buy type="regular">Sold out</Buy>
          )}
        </TicketTypeText>
      </TicketType>
      <TicketType type="bronze">
        <TicketBalanceBox>
          <BalanceText>
            Bronze:{" "}
            {newTicketRemaining && a
              ? newTicketRemaining.data.tickets.bronzeTickets
              : UserTicketData && b
              ? UserTicketData.bronzeTickets
              : UserDatas.user?.tickets
              ? UserDatas.user.tickets.bronzeTickets
              : 0}
          </BalanceText>
          <AmountBox type="bronze">0.3SOL</AmountBox>
        </TicketBalanceBox>
        <RiVerifiedBadgeFill style={bronzeiconStyle} />
        <TicketTypeText type="bronze">
          <Buy type="bronze" onClick={() => openRouletteModal("bronzeTickets")}>
            Spin
          </Buy>
          {bronzeBalance && bronzeBalance > 0 ? (
            <Buy onClick={() => handleBuyTickets("bronze")} type="bronze">
              BUY
            </Buy>
          ) : (
            <Buy type="bronze">Sold out</Buy>
          )}
        </TicketTypeText>
      </TicketType>
      <TicketType type="silver">
        <TicketBalanceBox>
          <BalanceText>
            Silver:{" "}
            {newTicketRemaining && a
              ? newTicketRemaining.data.tickets.silverTickets
              : UserTicketData && b
              ? UserTicketData.silverTickets
              : UserDatas.user?.tickets
              ? UserDatas.user.tickets.silverTickets
              : 0}
          </BalanceText>
          <AmountBox type="silver">0.4SOL</AmountBox>
        </TicketBalanceBox>
        <RiVerifiedBadgeFill style={silvericonStyle} />
        <TicketTypeText type="silver">
          <Buy type="silver" onClick={() => openRouletteModal("silverTickets")}>
            Spin
          </Buy>
          {silverBalance && silverBalance > 0 ? (
            <Buy onClick={() => handleBuyTickets("silver")} type="silver">
              Buy
            </Buy>
          ) : (
            <Buy type="silver">Sold out</Buy>
          )}
        </TicketTypeText>
      </TicketType>
      <TicketType type="gold">
        <TicketBalanceBox>
          <BalanceText>
            Gold:{" "}
            {newTicketRemaining && a
              ? newTicketRemaining.data.tickets.goldTickets
              : UserTicketData && b
              ? UserTicketData.goldTickets
              : UserDatas.user?.tickets
              ? UserDatas.user.tickets.goldTickets
              : 0}
          </BalanceText>
          <AmountBox type="gold">0.5SOL</AmountBox>
        </TicketBalanceBox>
        <RiVerifiedBadgeFill style={goldiconStyle} />
        <TicketTypeText type="gold">
          <Buy type="gold" onClick={() => openRouletteModal("goldTickets")}>
            Spin
          </Buy>
          {goldBalance && goldBalance > 0 ? (
            <Buy onClick={() => handleBuyTickets("gold")} type="gold">
              BUY
            </Buy>
          ) : (
            <Buy type="gold">Sold out</Buy>
          )}
        </TicketTypeText>
      </TicketType>
    </TicketTypeBox>
  );
}
export default TicketBoxes;

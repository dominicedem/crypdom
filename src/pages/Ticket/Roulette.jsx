import styled from "styled-components";
import { Wheel } from "react-custom-roulette";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openRoulette } from "../../feature/Slices/AuthSlice";
import { updateFinishedSpin } from "../../feature/Slices/TransactionSlice";
import { setIsUserTicket } from "../../feature/Slices/UserSlice";
import { MdCancel } from "react-icons/md";

const RouletteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 3rem 2rem 3rem;
  border-radius: 1rem;
  background: linear-gradient(120deg, #000a00cc, #040404da), url(casino.jpeg);
  filter: grayscale(90%);
  background-size: cover;
  box-shadow: 0 1rem 1rem 0 #000a;
  height: 80vh;
  @media (max-width: 450px) {
    height: 70vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
  }
`;
const SpinButton = styled.span`
  font-size: 1.8rem;
  color: #111;
  border-radius: 3rem;
  padding: 0.8rem 2rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background: linear-gradient(#ccc, #a3a3a3);
  &:hover {
    background: linear-gradient(#d8d8d8, #969595);
  }
`;
const RouletteHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const RouletteText = styled.div`
  font-size: 1.9rem;
  color: #ccc;
`;
const iconStyle = {
  fontSize: "2.5rem",
  color: "var(--primary_text_color)",
  cursor: "pointer",
};
const goldData = [
  { option: "43,000" },
  { option: "45,000" },
  { option: "50,000" },
  { option: "54,000" },
];
const silverData = [
  { option: "30,000" },
  { option: "34,000" },
  { option: "38,000" },
  { option: "42,000" },
];
const bronzeData = [
  { option: "20,000" },
  { option: "23,000" },
  { option: "26,000" },
  { option: "27,000" },
];
const regularData = [
  { option: "5,000" },
  { option: "6,000" },
  { option: "7,000" },
  { option: "8,000" },
];

const noData = [
  { option: "0" },
  { option: "0" },
  { option: "0" },
  { option: "0" },
];

export default function Roulette() {
  const [spin, setSpin] = useState(false);
  const [spinTicket, setSpinTicket] = useState(noData);
  const [winningPrize, setWinningPrize] = useState(0);
  const { ticket, boughtTicketSuccessData, finished } = useSelector(
    (state) => state.transactionData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    ticket === "gold" && setSpinTicket(goldData);
    ticket === "silver" && setSpinTicket(silverData);
    ticket === "bronze" && setSpinTicket(bronzeData);
    ticket === "regular" && setSpinTicket(regularData);
  }, [ticket]);

  function handleSpinClick() {
    if (!spin) {
      boughtTicketSuccessData &&
        setWinningPrize(boughtTicketSuccessData.rollIndex);
      setSpin(true);
    }
  }
  function handleCloseRoullete() {
    dispatch(openRoulette(false));
    dispatch(updateFinishedSpin(false));
    dispatch(setIsUserTicket(true));
  }
  return (
    <RouletteBox>
      <RouletteHead>
        <RouletteText>CrypDom-Roulette</RouletteText>
        <MdCancel onClick={() => handleCloseRoullete()} style={iconStyle} />
      </RouletteHead>
      <Wheel
        mustStartSpinning={spin}
        prizeNumber={winningPrize}
        data={spinTicket}
        spinDuration={[0.5]}
        pointerProps={{
          src: "/pointerImage.png",
          style: { transform: "translate(-8%,8%)" },
        }}
        outerBorderColor={"#333"}
        radiusLineColor={"#333"}
        outerBorderWidth={3}
        radiusLineWidth={3}
        backgroundColors={["#c0c0c0", "#d3d3d3"]}
        onStopSpinning={() => {
          setSpin(false);
          dispatch(updateFinishedSpin(true));
        }}
        disableInitialAnimation={true}
      />
      {boughtTicketSuccessData && !finished && (
        <SpinButton disabled={spin} onClick={() => handleSpinClick()}>
          Spin now
        </SpinButton>
      )}
      {!boughtTicketSuccessData && <SpinButton>Loading...</SpinButton>}
      {finished && (
        <SpinButton onClick={() => handleCloseRoullete()}>Finished</SpinButton>
      )}
    </RouletteBox>
  );
}

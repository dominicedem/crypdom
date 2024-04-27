import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SwappingModal from "./SwappingModal";
import { useEffect, useState } from "react";
import Network from "../Network";
import {
  updateOpenNetwork,
  updateTyped,
} from "../../../feature/Slices/TransactionSlice";
import SelectToken from "../SelectToken";

const Container = styled.div`
  height: 85vh;
  width: 100%;
  background: linear-gradient(-120deg, #000000d6 50%, #000d);
  position: relative;
  @media (max-width: 500px) {
    height: 90vh;
  }
`;

const PresaleBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.9rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #e8e8e8d9;
  border: 1px solid #425988;
  top: 11%;
  left: 82%;
  padding: 0.5rem 0;
  border-radius: 1rem;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  backdrop-filter: brightness(20%);
`;

const Boxs = styled.div`
  border-radius: 2rem;
  background-color: #d5d5d5;
  position: absolute;
  max-width: 80rem;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 2rem 0;
  @media (max-width: 850px) {
    width: 50vw;
  }
  @media (max-width: 700px) {
    width: 55vw;
  }
  @media (max-width: 650px) {
    width: 60vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 550px) {
    width: 80vw;
  }
  @media (max-width: 480px) {
    width: 95vw;
  }
  @media (max-width: 400px) {
    width: 95vw;
  }
`;
const Header = styled.p`
  display: inline-block;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  align-self: center;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media (max-width: 460px) {
    font-size: 3rem;
  }
  @media (max-width: 395px) {
    font-size: 2.8rem;
  }
`;

function Presale() {
  const [openNetwork, setOpenNetwork] = useState(false);
  const dispatch = useDispatch();
  const { openNetworks } = useSelector((state) => state.transactionData);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.split(" ").includes("overlay")) {
        setOpenNetwork(false);
      }
      if (e.target.className.split(" ").includes("overlays")) {
        dispatch(updateOpenNetwork(false));
        dispatch(updateTyped(false));
      }
    });
  }, [dispatch]);
  return (
    <Container>
      <PresaleBox>
        <Header>Swap to $CrypDom anytime</Header>
        <SwappingModal isOpen={true} />
      </PresaleBox>
      {openNetwork && (
        <Overlay className="overlay">
          <Box>
            <Network />
          </Box>
        </Overlay>
      )}
      {openNetworks && (
        <Overlay className="overlays">
          <Boxs>
            <SelectToken />
          </Boxs>
        </Overlay>
      )}
    </Container>
  );
}

export default Presale;

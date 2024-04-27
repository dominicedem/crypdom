import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSettings,
  updateSolPrice,
} from "../../../feature/Slices/TokenSlice";
import {
  updateChoose,
  updateOpenNetwork,
} from "../../../feature/Slices/TransactionSlice";
import { IoIosSettings } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin: 0 auto;
  background: linear-gradient(60deg, #444d, #3337);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  @media (max-width: 950px) {
    width: 40vw;
  }
  @media (max-width: 720px) {
    width: 45vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 65vw;
  }
  @media (max-width: 550px) {
    width: 80vw;
  }
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0.5rem 0;
  width: 100%;
`;
const TagLine = styled.div`
  width: 40%;
  height: 0.1rem;
  background-color: #3d3d3d;
`;

const FirstSwapModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SwapTextDescription = styled.p`
  font-size: 1.7rem;
  color: #ccc;
`;
const SwapHolderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  border-radius: 1rem;
  width: 90%;
  background: ${(props) =>
    props.back === "true"
      ? "linear-gradient(#bbb,#929292)"
      : "linear-gradient(#b2b2b28d,#7f7f7f96)"};
  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      props.back === "true" ? "0 0 1rem 0.01rem #cccccc68" : "none"};
  }
  @media (max-width: 900px) {
    padding: 1.6rem;
  }
  @media (max-width: 700px) {
    padding: 1.4rem;
  }
`;
const SwapTokenBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 0.9rem;
  cursor: pointer;
  background: linear-gradient(60deg, #3337, #444d);
  border-radius: 1rem;
  z-index: 1;
  &:hover {
    /* background: linear-gradient(60deg, #444d, #3337); */
    background: ${(props) =>
      props.back === "true"
        ? "linear-gradient(60deg, #444d, #3337)"
        : "linear-gradient(60deg, #3337,#444d)"};
  }
  @media (max-width: 700px) {
    width: 33%;
  }
  @media (max-width: 550px) {
    width: 30%;
  }
  @media (max-width: 400px) {
    width: 33%;
  }
`;
const Img = styled.img`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
const TokenName = styled.p`
  font-size: 1.6rem;
  color: #ccc;
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;
const InputPrice = styled.input`
  font-size: 2rem;
  background: inherit;
  border: none;
  color: #2e2e2e;
  width: 100%;
  text-align: end;
  &::placeholder {
    text-align: end;
    color: inherit;
    font-size: 2rem;
    color: #2e2e2e79;
  }
`;
const SwapPrice = styled.p`
  font-size: 1.7rem;
  color: #2e2e2e;
`;
const SwapButton = styled.span`
  font-size: 2rem;
  color: #eeeeee;
  background: #131313;
  text-align: center;
  border: none;
  width: 90%;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin-top: 2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 1rem 0.01rem #cccccc44;
  }
`;
const Box = styled.span`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;
  width: 30%;
`;
const SolPrice = styled.span`
  font-size: 1.3rem;
  color: #2e2e2ebd;
  font-weight: bold;
`;

const iconStyle = {
  fontSize: "2rem",
  color: "#aaaa",
};
const iconStyles = {
  width: "2rem",
  height: "1.8rem",
  color: "#aaa",
  borderRadius: "0.6rem",
  border: "2.7px solid #141414",
  padding: "0.5rem",
};
const iconStyles1 = {
  width: "2rem",
  height: "1.8rem",
  color: "#bbb",
  borderRadius: "0.6rem",
  border: "2.7px solid #bbbbbbd8",
  padding: "0.5rem",
};
const Settingsbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto -1.5rem auto;
  width: 35vw;

  @media (max-width: 950px) {
    width: 40vw;
  }
  @media (max-width: 720px) {
    width: 45vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 65vw;
  }
  @media (max-width: 550px) {
    width: 80vw;
  }
`;
const Settings = styled.span`
  border-radius: 1.5rem;
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee2;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee3b;
  }
`;

function SwappingModal() {
  // const [price, setPrice] = useState();
  const [icon, setIcon] = useState(false);
  const [swapEntry, SetSwapEntry] = useState(false);
  const dispatch = useDispatch();
  const { currentToken1, currentToken2 } = useSelector(
    (state) => state.transactionData
  );
  // const { data, refetch } = useQuery({
  //   queryKey: ["solPrice"],
  //   queryFn: FetchSolPrice,
  //   enabled: false,
  // });

  function handleChange(e) {
    // setPrice(() => e.target.value);
    dispatch(updateSolPrice(e.target.value));
  }
  function handleEnter() {
    setIcon(true);
  }
  function handleLeave() {
    setIcon(false);
  }
  function handleChanges(pick) {
    dispatch(updateOpenNetwork((el) => !el));
    pick === "true" && dispatch(updateChoose(true));
    pick === "false" && dispatch(updateChoose(false));
  }
  return (
    <>
      <Settingsbox>
        <Settings>
          <IoMdRefresh style={iconStyle} />
        </Settings>
        <Settings onClick={() => dispatch(updateSettings(true))}>
          <IoIosSettings style={iconStyle} />
        </Settings>
      </Settingsbox>
      <ModalWrapper>
        <FirstSwapModalBox>
          <SwapTextDescription>You're paying</SwapTextDescription>
          {!swapEntry ? (
            <>
              <SwapHolderBox back="true">
                <SwapTokenBox onClick={() => handleChanges("true")}>
                  <Img alt="Partner's logo" src={currentToken1.logo} />
                  <TokenName>{currentToken1.symbol}</TokenName>
                  <IoIosArrowDown style={iconStyle} />
                </SwapTokenBox>
                <Box>
                  <InputPrice
                    type="text"
                    placeholder="0.00"
                    onChange={(e) => handleChange(e)}
                  />
                  <SolPrice>$0.00</SolPrice>
                </Box>
              </SwapHolderBox>
            </>
          ) : (
            <>
              <SwapHolderBox back="true">
                <SwapTokenBox onClick={() => handleChanges("false")}>
                  <Img src={currentToken2.logo} alt="logo" />
                  <TokenName>{currentToken2.symbol}</TokenName>
                  <IoIosArrowDown style={iconStyle} />
                </SwapTokenBox>
                <Box>
                  <InputPrice
                    type="text"
                    placeholder="0.00"
                    onChange={(e) => handleChange(e)}
                  />
                  <SolPrice>$0.00</SolPrice>
                </Box>
              </SwapHolderBox>
            </>
          )}
        </FirstSwapModalBox>
        <TagBox>
          <TagLine></TagLine>
          <TiArrowDown
            onClick={() => SetSwapEntry((el) => !el)}
            style={icon ? iconStyles1 : iconStyles}
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
          />
          <TagLine></TagLine>
        </TagBox>
        <FirstSwapModalBox>
          <SwapTextDescription>To recieve</SwapTextDescription>
          {!swapEntry ? (
            <>
              <SwapHolderBox back="false">
                <SwapTokenBox
                  back="true"
                  onClick={() => handleChanges("false")}
                >
                  <Img src={currentToken2.logo} alt="logo" />
                  <TokenName>{currentToken2.symbol}</TokenName>
                  <IoIosArrowDown style={iconStyle} />
                </SwapTokenBox>
                <SwapPrice>0.00</SwapPrice>
              </SwapHolderBox>
            </>
          ) : (
            <>
              <SwapHolderBox back="false">
                <SwapTokenBox back="true" onClick={() => handleChanges("true")}>
                  <Img alt="Partner's logo" src={currentToken1.logo} />
                  <TokenName>{currentToken1.symbol}</TokenName>
                  <IoIosArrowDown style={iconStyle} />
                </SwapTokenBox>
                <SwapPrice>0.00</SwapPrice>
              </SwapHolderBox>
            </>
          )}
        </FirstSwapModalBox>
        <SwapButton>Swap</SwapButton>
      </ModalWrapper>
    </>
  );
}
export default SwappingModal;

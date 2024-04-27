import React from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import styled from "styled-components";
import { openBuy } from "../Slices/AuthSlice";
import {
  updataClaimFunction,
  updateIsClaimModal,
  updateIsPresaleModal,
} from "../Slices/TokenSlice";
import { Buffer } from "buffer";

window.Buffer = Buffer;
const ConnectStyle = {
  background: "linear-gradient(#131313,#242424e3)",
  boxShadow: "inset 0.3rem 0.5rem 0.5rem 0 #222",
  color: "#eee",
  fontSize: "1.4rem",
  padding: "0.2rem 1rem",
};
const ConfirmBuyBox = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.4rem;
  border-radius: 2rem;
  background: linear-gradient(#141414, #141414);
  background-size: cover;
  box-shadow: 0 1rem 1rem 0 #000a;
  line-height: 1.4;
  position: absolute;
  border: 1px dashed #ccc;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
const ConfirmBuyBoxs = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.4rem;
  border-radius: 2rem;
  background: linear-gradient(#141414, #304256);
  background-size: cover;
  box-shadow: 0 1rem 1rem 0 #000a;
  line-height: 1.4;
  position: absolute;
  border: 1px dashed #e79821f8;
  top: 60%;
  left: 58%;
  transform: translate(-50%, -50%);
  z-index: 100;
  @media (max-width: 653px) {
    top: 47%;
    left: 52%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 436px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ProceedText = styled.p`
  font-size: 1.8rem;
  color: #b1b1b1;
  margin-bottom: 0.5rem;
`;
const PurchaseHead = styled.div`
  font-size: 2.2rem;
  cursor: pointer;
  color: #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const ProceedBuyButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 50%;
  /* background: linear-gradient(#ccc, #a3a3a3); */
  background: linear-gradient(#ccc, #e79821f8);
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: #222;
  align-self: center;
  text-transform: capitalize;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(#d8d8d8, #e79821f8);
  }
`;

const Proceed = styled.span`
  font-size: 1.8rem;
  color: #222;
`;
const TermsCondition = styled.p`
  font-size: 1.4rem;
  color: #aaa;
`;
const iconStyle = {
  fontSize: "2.5rem",
  color: "#ccc",
};
const iconStyles = {
  fontSize: "2.5rem",
  color: " #e79821f8",
};

const linkStyle = {
  color: "#777",
  paddingBottom: "0.25rem",
};
export default function ClaimToken() {
  const { connected } = useWallet();
  const dispatch = useDispatch();
  const { buy } = useSelector((state) => state.authData);
  const { isClaimModal, isPresaleModal } = useSelector(
    (state) => state.tokenData
  );
  const { rollTicket } = useSelector((state) => state.transactionData);
  let { buy: BuyTicket, ticket } = buy;

  function handleCancel() {
    dispatch(openBuy(false));
  }
  function handleCancelTokenTrans() {
    dispatch(updateIsClaimModal(false));
  }
  function handleCancelPresaleTokenTrans() {
    dispatch(updateIsPresaleModal(false));
  }
  // function handleSpinTicket() {
  //   dispatch(updateRollTicket(false));
  //   dispatch(updateTicketType(spinTicket));
  //   dispatch(openRoulette(true));
  // }
  function handleBuyTicket() {
    dispatch(openBuy(false));
  }
  function handleClaimToken() {
    dispatch(updataClaimFunction(false));
    dispatch(updateIsClaimModal(false));
  }
  return (
    <div className="App walletstyle">
      <div onClick={(e) => {}}>
        <WalletMultiButton style={ConnectStyle} className="walletstyle" />
      </div>
      {BuyTicket && connected && (
        <ConfirmBuyBox>
          <PurchaseHead>
            Confirm buy
            <MdCancel onClick={() => handleCancel()} style={iconStyle} />
          </PurchaseHead>
          <ProceedText>Proceed to buy a {ticket} ticket</ProceedText>
          <ProceedBuyButton onClick={() => handleBuyTicket()}>
            <Proceed>Proceed</Proceed>
          </ProceedBuyButton>
          <TermsCondition>
            By proceeding, you are consenting to abide by our{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Privacy Policy
            </Link>
          </TermsCondition>
        </ConfirmBuyBox>
      )}
      {isClaimModal && connected && (
        <ConfirmBuyBox>
          <PurchaseHead>
            Confirm claim
            <MdCancel
              onClick={() => handleCancelTokenTrans()}
              style={iconStyle}
            />
          </PurchaseHead>
          <ProceedText>Proceed to claim your token?</ProceedText>
          <ProceedBuyButton onClick={() => handleClaimToken()}>
            <Proceed>Proceed</Proceed>
          </ProceedBuyButton>
          <TermsCondition>
            By proceeding, you are consenting to abide by our{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Privacy Policy
            </Link>
          </TermsCondition>
        </ConfirmBuyBox>
      )}
      {isPresaleModal && connected && (
        <ConfirmBuyBoxs>
          <PurchaseHead>
            Confirm claim
            <MdCancel
              onClick={() => handleCancelPresaleTokenTrans()}
              style={iconStyles}
            />
          </PurchaseHead>
          <ProceedText>Proceed to claim LNK?</ProceedText>
          <ProceedBuyButton>
            <Proceed>Proceed</Proceed>
          </ProceedBuyButton>

          <TermsCondition>
            By proceeding, you are consenting to abide by our{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Privacy Policy
            </Link>
          </TermsCondition>
        </ConfirmBuyBoxs>
      )}
      {rollTicket && (
        <ConfirmBuyBox>
          <PurchaseHead>
            Confirm spin
            <MdCancel onClick={() => handleCancel()} style={iconStyle} />
          </PurchaseHead>
          <ProceedText>Proceed to spin a {ticket} ticket</ProceedText>
          <ProceedBuyButton>
            <Proceed>Proceed</Proceed>
          </ProceedBuyButton>
          <TermsCondition>
            By using Link Network, you are consenting to abide by our{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/termsCondition" style={linkStyle}>
              Privacy Policy
            </Link>
          </TermsCondition>
        </ConfirmBuyBox>
      )}
    </div>
  );
}

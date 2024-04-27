import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Transaction, Connection } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { activateBlur } from "../Slices/AppSlice";
import {
  updateBoughtTicket,
  updateConnect,
  updateRollTicket,
  updateTicketType,
  updateTransactionFail,
  updateTransactionSuccess,
  updateUserTicketData,
} from "../Slices/TransactionSlice";
import fetchTicket from "../../service/ApiTicketData";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { openBuy, openRoulette } from "../Slices/AuthSlice";
import TicketSuccess from "../../service/ApiBuyTicket";
import FetchSpinData from "../../service/ApiFetchSpinData";
import {
  updataClaimFunction,
  updateIsClaimModal,
  updateIsPresale,
  updateIsPresaleModal,
} from "../Slices/TokenSlice";
import TokenTransaction from "../../service/ApiTokenTrans";
import claimSuccess from "../../service/ApiClaimSuccess";
import { setA, setB } from "../Slices/UserSlice";
import { Buffer } from "buffer";
import PresaleTransaction from "../../service/ApiPresale";

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
    /* background: linear-gradient(#d8d8d8, #969595); */
  }
`;
const FailedBuyButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 0.5rem; */
  cursor: pointer;
  width: fit-content;
  background: linear-gradient(#ccc, #a3a3a3);
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #222;
  align-self: center;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(#d8d8d8, #969595);
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
  const { publicKey, signTransaction, connected } = useWallet();
  const dispatch = useDispatch();
  const { buy } = useSelector((state) => state.authData);
  const { token } = useSelector((state) => state.userData);
  const { claimToken, isClaimModal, isPresale, isPresaleModal, solPrice } =
    useSelector((state) => state.tokenData);
  const { rollTicket, ticket: spinTicket } = useSelector(
    (state) => state.transactionData
  );
  let { buy: BuyTicket, ticket } = buy;

  const {
    data,
    remove: removeData,
    isFetched: fetchedTicket,
  } = useQuery({
    queryKey: ["ticketData", ticket],
    queryFn: () => TicketSuccess(token, ticket, publicKey),
    // enabled: false,
  });

  const {
    data: tokenTrans,
    remove: removeTokenData,
    refetch: fetchTokenTrans,
    isFetched: tokenTransFetched,
  } = useQuery({
    queryKey: ["tokenTrans"],
    queryFn: () => TokenTransaction(token, publicKey),
    enabled: false,
  });
  claimToken && handleFetchTokenTrans();
  const {
    data: presaletokenTrans,
    remove: removepresaleTokenData,
    refetch: fetchpresaleTokenTrans,
    isFetched: presaletokenTransFetched,
  } = useQuery({
    queryKey: ["presaletokenTrans"],
    queryFn: () => PresaleTransaction(solPrice, publicKey),
    enabled: false,
  });
  isPresale && handlePresaleFetchTokenTrans();
  console.log(presaletokenTrans);

  const { refetch: confirmClaim } = useQuery({
    queryKey: ["confirmClaim"],
    queryFn: () => claimSuccess(token, publicKey),
    enabled: false,
  });

  const {
    data: ticketData,
    refetch,
    remove: clear,
  } = useQuery({
    queryKey: ["fetchTicket"],
    queryFn: () => fetchTicket(token, ticket, publicKey),
    enabled: false,
  });

  ticketData?.status === "success" && handleUpdateData();

  const {
    data: spinResult,
    refetch: refetchSpin,
    remove,
  } = useQuery({
    queryKey: ["spinData"],
    queryFn: () => FetchSpinData(token, spinTicket),
    enabled: false,
  });
  spinResult && handleBoughtTicket();

  function handleUpdateData() {
    dispatch(setA(false));
    dispatch(setB(true));
    dispatch(updateUserTicketData(ticketData.userTicket));
    clear();
  }
  function handleFetchTokenTrans() {
    fetchTokenTrans();
    dispatch(updataClaimFunction(false));
  }
  function handlePresaleFetchTokenTrans() {
    fetchpresaleTokenTrans();
    dispatch(updateIsPresale(false));
  }
  function handleBoughtTicket() {
    dispatch(setA(true));
    dispatch(setB(false));
    dispatch(updateUserTicketData(""));
    dispatch(updateBoughtTicket(spinResult));
    remove();
  }
  function handleClaimToken() {
    dispatch(updataClaimFunction(false));
    dispatch(updateIsClaimModal(false));
    activateTokenTransaction(tokenTrans.transaction);
  }
  function handlePresaleClaimToken() {
    dispatch(updateIsPresale(false));
    dispatch(updateIsPresaleModal(false));
    activatePresaleTokenTransaction(presaletokenTrans.transaction);
  }

  const handleTransaction = useCallback(() => {
    dispatch(updateTransactionSuccess(true));
    setTimeout(() => dispatch(updateTransactionSuccess(false)), 2000);
  }, [dispatch]);

  const handleClaimSuccess = useCallback(() => {
    handleTransaction();
    removeTokenData();
    confirmClaim();
  }, [handleTransaction, removeTokenData, confirmClaim]);

  const handlePresaleClaimSuccess = useCallback(() => {
    handleTransaction();
    removepresaleTokenData();
  }, [handleTransaction, removepresaleTokenData]);

  const handleBuySuccess = useCallback(() => {
    handleTransaction();
    refetch();
  }, [handleTransaction, refetch]);

  const handleRejectTransaction = useCallback(() => {
    dispatch(updateTransactionFail(true));
  }, [dispatch]);

  const handleConnect = useCallback(() => {
    dispatch(updateConnect(true));
  }, [dispatch]);

  const RomoveTransactionError = useCallback(() => {
    setTimeout(() => {
      dispatch(updateTransactionFail(false));
      dispatch(updateConnect(false));
    }, 4000);
  }, [dispatch]);

  function handleBlur() {
    // !connected && dispatch(activateBlur(true));
  }

  const activateTicketTransaction = useCallback(
    async (transaction) => {
      try {
        const connection = new Connection(import.meta.env.VITE_rpcEndPoint);
        if (!publicKey) throw new Error("Connect wallet first");
        const recoveredTransaction = Transaction.from(
          Uint8Array.from(atob(transaction), (c) => c.charCodeAt(0))
        );

        const clickHandler = async () => {
          const signedTransaction = await signTransaction(recoveredTransaction);
          let tx = await connection.sendRawTransaction(
            signedTransaction.serialize()
          );
          tx ? handleBuySuccess() : handleRejectTransaction();
        };

        clickHandler();
      } catch (err) {
        console.error(err.message);
        err.message === "Connect wallet first" && handleConnect();
      } finally {
        const buyAndTransact = {
          buys: false,
          ticket,
        };
        dispatch(updateTicketType(""));
        dispatch(openBuy(buyAndTransact));
        RomoveTransactionError();
        removeData();
      }
    },
    [
      publicKey,
      ticket,
      removeData,
      signTransaction,
      handleRejectTransaction,
      handleConnect,
      RomoveTransactionError,
      dispatch,
      handleBuySuccess,
    ]
  );

  const activateTokenTransaction = useCallback(
    async (tokenTransaction) => {
      try {
        const connection = new Connection(import.meta.env.VITE_rpcEndPoint);
        if (!publicKey) throw new Error("Connect wallet first");
        const recoveredTransaction = Transaction.from(
          Uint8Array.from(atob(tokenTransaction), (c) => c.charCodeAt(0))
        );
        const clickHandler = async () => {
          const signedTransaction = await signTransaction(recoveredTransaction);
          const tx = await connection.sendRawTransaction(
            signedTransaction.serialize()
          );
          tx ? handleClaimSuccess() : handleRejectTransaction();
        };

        clickHandler();
      } catch (err) {
        console.error("caughtError:", err.message);
        err.message === "Connect wallet first" && handleConnect();
      } finally {
        dispatch(updataClaimFunction(false));
        dispatch(updateIsClaimModal(false));
        removeTokenData();
        RomoveTransactionError();
      }
    },
    [
      signTransaction,
      dispatch,
      removeTokenData,
      handleClaimSuccess,
      handleConnect,
      RomoveTransactionError,
      handleRejectTransaction,
      publicKey,
    ]
  );
  const activatePresaleTokenTransaction = useCallback(
    async (tokenTransaction) => {
      try {
        const connection = new Connection(import.meta.env.VITE_rpcEndPoint);
        if (!publicKey) throw new Error("Connect wallet first");
        const recoveredTransaction = Transaction.from(
          Uint8Array.from(atob(tokenTransaction), (c) => c.charCodeAt(0))
        );
        const clickHandler = async () => {
          const signedTransaction = await signTransaction(recoveredTransaction);
          const tx = await connection.sendRawTransaction(
            signedTransaction.serialize()
          );
          tx ? handlePresaleClaimSuccess() : handleRejectTransaction();
        };

        clickHandler();
      } catch (err) {
        console.error("caughtError:", err.message);
        err.message === "Connect wallet first" && handleConnect();
      } finally {
        dispatch(updateIsPresale(false));
        dispatch(updateIsPresaleModal(false));
        removepresaleTokenData();
        RomoveTransactionError();
      }
    },
    [
      signTransaction,
      dispatch,
      removepresaleTokenData,
      handlePresaleClaimSuccess,
      handleConnect,
      RomoveTransactionError,
      handleRejectTransaction,
      publicKey,
    ]
  );

  const handleConnectWalletError = useCallback(
    (isClaimModal, BuyTicket, isPresale) => {
      BuyTicket && !connected && activateTicketTransaction();
      isClaimModal && !connected && activateTokenTransaction();
      isPresale && !connected && activatePresaleTokenTransaction();
    },
    [
      activateTicketTransaction,
      activateTokenTransaction,
      activatePresaleTokenTransaction,
      connected,
    ]
  );

  (BuyTicket || isClaimModal || isPresale) &&
    handleConnectWalletError(isClaimModal, BuyTicket, isPresale);
  useEffect(() => {
    connected && dispatch(activateBlur(false));
  }, [connected, dispatch, fetchTokenTrans, activateTicketTransaction]);

  function handleCancel() {
    dispatch(openBuy(false));
    dispatch(updateRollTicket(false));
    removeData();
  }
  function handleCancelTokenTrans() {
    dispatch(updateIsClaimModal(false));
    removeTokenData();
  }
  function handleCancelPresaleTokenTrans() {
    dispatch(updateIsPresaleModal(false));
    removepresaleTokenData();
  }
  function handleSpinTicket() {
    dispatch(updateRollTicket(false));
    refetchSpin();
    dispatch(updateTicketType(spinTicket));
    dispatch(openRoulette(true));
  }
  function handleBuyTicket() {
    dispatch(openBuy(false));
    activateTicketTransaction(data.transaction);
  }
  return (
    <div className="App walletstyle">
      <div
        onClick={(e) => {
          handleBlur();
        }}
      >
        <WalletMultiButton style={ConnectStyle} className="walletstyle" />
      </div>
      {BuyTicket && connected && (
        <ConfirmBuyBox>
          <PurchaseHead>
            Confirm buy
            <MdCancel onClick={() => handleCancel()} style={iconStyle} />
          </PurchaseHead>
          <ProceedText>Proceed to buy a {ticket} ticket</ProceedText>
          {data?.transaction && (
            <ProceedBuyButton onClick={() => handleBuyTicket()}>
              <Proceed>Proceed</Proceed>
            </ProceedBuyButton>
          )}
          {!fetchedTicket && (
            <ProceedBuyButton>
              <Proceed>Loading...</Proceed>
            </ProceedBuyButton>
          )}
          {fetchedTicket && data?.status === "fail" && (
            <ProceedBuyButton onClick={() => handleCancel()}>
              <Proceed>Limit: 2 tickets daily</Proceed>
            </ProceedBuyButton>
          )}
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
          {tokenTrans?.transaction && (
            <ProceedBuyButton onClick={() => handleClaimToken()}>
              <Proceed>Proceed</Proceed>
            </ProceedBuyButton>
          )}
          {!tokenTransFetched && (
            <ProceedBuyButton>
              <Proceed>Loading...</Proceed>
            </ProceedBuyButton>
          )}
          {tokenTransFetched &&
            tokenTrans?.status === "fail" &&
            tokenTrans?.message === "user has already claimed token" && (
              <FailedBuyButton onClick={() => handleCancelTokenTrans()}>
                <Proceed>Already cliamed Token</Proceed>
              </FailedBuyButton>
            )}
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
          {presaletokenTrans?.transaction && (
            <ProceedBuyButton onClick={() => handlePresaleClaimToken()}>
              <Proceed>Proceed</Proceed>
            </ProceedBuyButton>
          )}
          {!presaletokenTransFetched && (
            <ProceedBuyButton>
              <Proceed>Loading...</Proceed>
            </ProceedBuyButton>
          )}
          {presaletokenTransFetched &&
            presaletokenTrans?.status === "fail" &&
            presaletokenTrans?.message === "provide the sol price" && (
              <FailedBuyButton onClick={() => handleCancelPresaleTokenTrans()}>
                <Proceed>Already claimed Token</Proceed>
              </FailedBuyButton>
            )}
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
          <ProceedBuyButton onClick={() => handleSpinTicket()}>
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

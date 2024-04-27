import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";

const TransactionErrorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  background: linear-gradient(#acacac, #818181);
  border-left: 0.5rem solid #4848c2;
  border-left: ${(props) =>
    props.ticket === "gold"
      ? "0.5rem solid #E19118"
      : props.ticket === "silver"
      ? "0.5rem solid #d7d7d7eb"
      : props.ticket === "bronze"
      ? "0.5rem solid #6a3805f0"
      : "0.5rem solid #a09e9ee4"};
  @media (max-width: 516px) {
    padding: 1rem 0.5rem;
    gap: 0.5rem;
    width: 58vw;
  }
  @media (max-width: 470px) {
    padding: 1rem 1rem;
    gap: 0.5rem;
    font-size: 1.6rem;
    width: 58vw;
  }
`;
const TransactionErrorText = styled.div`
  font-size: 1.8rem;
  color: #222;
  text-align: center;
`;
const iconStyle = {
  fontSize: "2rem",
  color: "#222",
};

function TransactionError({
  success,
  fail,
  connect,
  activate,
  connected,
  warning,
  isLoggedOut,
}) {
  const { ticket } = useSelector((state) => state.transactionData);
  return (
    <>
      {success && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Transaction successful</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {fail && (
        <TransactionErrorBox>
          <MdCancel style={iconStyle} />
          <TransactionErrorText>Transaction failed</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {warning && (
        <TransactionErrorBox ticket={ticket}>
          <MdCancel style={iconStyle} />
          <TransactionErrorText>
            Insufficient {ticket} ticket
          </TransactionErrorText>
        </TransactionErrorBox>
      )}
      {connect && (
        <TransactionErrorBox>
          <FaWallet style={iconStyle} />
          <TransactionErrorText>Connect wallet first</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {activate && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Activated successfully</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {isLoggedOut && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Loggedout successfully</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {connected && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>
            Twitter registered successfully
          </TransactionErrorText>
        </TransactionErrorBox>
      )}
    </>
  );
}

export default TransactionError;

import styled from "styled-components";
import { AiFillInteraction } from "react-icons/ai";
import { TiTicket } from "react-icons/ti";
import { GrTwitter } from "react-icons/Gr";
import { useDispatch, useSelector } from "react-redux";
import {
  updataClaimFunction,
  updateIsClaimModal,
} from "../../feature/Slices/TokenSlice";
import Connectwallet from "../../feature/Wallet/Connectwallet";
// import CopyToClipboard from "./CopyToClipboard";

const HeaderBox = styled.div``;
const DashboardHead = styled.h1`
  width: 85%;
  font-size: 3.2rem;
  line-height: 1.1;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 575px) {
    width: 100%;
    font-size: 3rem;
  }
  @media (max-width: 476px) {
    width: 100%;
    font-size: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 2.8rem;
    gap: 1rem;
  }
`;
// const User = styled.span`
//   font-size: 2rem;
//   line-height: 1.1;
//   background-clip: text;
//   background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   @media (max-width: 575px) {
//     display: none;
//     font-size: 3.2rem;
//   }
// `;

const DashboardText = styled.div`
  font-size: 1.5rem;
  color: #a8a8a8;
  line-height: 1.3;
  margin-top: 1rem;
  /* @media (max-width: 575px) {
    display: none;
    font-size: 2rem;
  } */
`;

const PointBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 45%;
  margin-top: 5rem;
  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;
const WalletBox = styled.div`
  align-self: start;
`;

const PointType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  padding: 2rem;
  border-radius: 2rem;
  border: 0.1px solid #49494d;
  background: linear-gradient(#141414eb, #141414eb), url("/hill.jpeg");
  @media (max-width: 1080px) {
    height: 67%;
  }
  @media (max-width: 985px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 860px) {
    padding: 2rem 0.5rem;
  }
  @media (max-width: 380px) {
    padding: 1.5rem 0.5rem;
    width: 100%;
  }
`;
const PointName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: #ddd;
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
const Texts = styled.p`
  font-size: 1.4rem;
  margin-top: 2rem;
  color: #a8a8a8;
`;
const Note = styled.span`
  font-size: 1.5rem;
  color: #f33a;
`;
const PointValue = styled.p`
  font-size: 1.5rem;
  color: #ddd;
`;
const Claim = styled.span`
  width: fit-content;
  cursor: pointer;
  font-size: 1.5rem;
  color: #222;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(#ddd, #b4b4b4);
  &:hover {
    background: -webkit-linear-gradient(#d8d8d8, #969595);
  }
`;

const Profile = styled.img`
  display: none;
  @media (max-width: 700px) {
    display: inline-block;
    width: 20%;
    height: 20%;
    border-radius: 1rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const iconStyle = {
  fontSize: "2rem",
  color: "#222",
  background: "-webkit-linear-gradient(#aaaaaaef, #707070f0)",
  borderRadius: "0.5rem",
  padding: "0.1rem 0.2rem",
};

function Points({ userData }) {
  const { isClaim, claimFee } = useSelector((state) => state.applayout);
  const { newTicketRemaining } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  function handleClaim() {
    dispatch(updateIsClaimModal(true));
    dispatch(updataClaimFunction(true));
  }

  return (
    <>
      <HeaderBox>
        {!isClaim ? (
          <DashboardHead>
            <Profile
              src={userData ? `${userData.user.photo}` : "/dashboard.jpeg"}
              alt="user-profile"
            />
            Monitor your points progress{" "}
            {userData ? `@${userData.user.screenName}` : "@user"}
            {/* <User>{userData ? `@${userData.user.screenName}` : "@user"}</User> */}
          </DashboardHead>
        ) : (
          <DashboardHead>
            Claim fee: {claimFee ? claimFee : 0}SOL{" "}
          </DashboardHead>
        )}
        {isClaim && (
          <WalletBox>
            <Connectwallet />
          </WalletBox>
        )}
        <DashboardText>
          Control and analyze your points in the easiest way
        </DashboardText>
      </HeaderBox>
      <PointBox>
        <PointType>
          <PointName>
            {!isClaim ? <Text>Social Point</Text> : <Text>Total point</Text>}
            {!isClaim && <GrTwitter style={iconStyle} />}
          </PointName>
          {!isClaim ? (
            <PointValue>
              {userData ? userData.user.followPoint : null}
            </PointValue>
          ) : (
            <PointValue>{userData ? userData.mytotalPoints : null}</PointValue>
          )}
        </PointType>
        <PointType>
          <PointName>
            {!isClaim ? (
              <Text>Tweet Point</Text>
            ) : (
              <Text>Link token earned</Text>
            )}
            {!isClaim && <AiFillInteraction style={iconStyle} />}
          </PointName>
          {!isClaim ? (
            <PointValue>
              ...
              {/* {userData ? userData.user.interactionPoint : null} */}
            </PointValue>
          ) : (
            <PointValue>{userData ? userData.myTokenPoints : null}</PointValue>
          )}
        </PointType>
        <PointType>
          <PointName>
            {!isClaim ? <Text>Ticket point</Text> : <Text>Claim token</Text>}
            {!isClaim && <TiTicket style={iconStyle} />}
          </PointName>
          {!isClaim ? (
            <PointValue>
              {newTicketRemaining
                ? newTicketRemaining.data.tickets.rollingPoints
                : userData
                ? userData.user.totalrollingPoints
                : null}
            </PointValue>
          ) : (
            <Claim onClick={() => handleClaim()}>Claim</Claim>
          )}
        </PointType>
      </PointBox>
      {!isClaim && (
        <Texts>
          <Note>Note</Note>: Interaction point will be allocated at claim period
        </Texts>
      )}
    </>
  );
}
export default Points;

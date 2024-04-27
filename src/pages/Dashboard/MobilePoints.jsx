import styled from "styled-components";
import { AiFillInteraction } from "react-icons/ai";
import { TiTicket } from "react-icons/ti";
import { GrTwitter } from "react-icons/Gr";
import { useDispatch, useSelector } from "react-redux";
import { updataClaimFunction } from "../../feature/Slices/TokenSlice";

const PointBox = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  width: 100%;
  @media (max-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 13vh;
  }
  @media (max-width: 530px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
const PointType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24%;
  height: 100%;
  padding: 2rem;
  border-radius: 2rem;
  border: 0.1px solid #49494d;
  background: linear-gradient(#141414eb, #141414eb), url("/hill.jpeg");
  @media (max-width: 499px) {
    padding: 1.5rem;
    width: 100%;
  }
  @media (max-width: 445px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
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
  @media (max-width: 575px) {
    font-size: 2rem;
  }
  @media (max-width: 499px) {
    font-size: 1.8rem;
  }
`;
const PointValue = styled.p`
  font-size: 1.5rem;
  color: #ddd;
  @media (max-width: 575px) {
    font-size: 2rem;
  }
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

const iconStyle = {
  fontSize: "2rem",
  color: "#222",
  background: "-webkit-linear-gradient(#aaaaaaef, #707070f0)",
  borderRadius: "0.5rem",
  padding: "0.1rem 0.2rem",
};

function MobilePoints({ UserDatas }) {
  const { isClaim } = useSelector((state) => state.applayout);
  const { newTicketRemaining } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  return (
    <PointBox>
      <PointType>
        <PointName>
          {!isClaim ? <Text>Social Point</Text> : <Text>Total point</Text>}
          {!isClaim && <GrTwitter style={iconStyle} />}
        </PointName>
        {!isClaim ? (
          <PointValue>
            {UserDatas ? UserDatas.user.followPoint : null}
          </PointValue>
        ) : (
          <PointValue>{UserDatas ? UserDatas.mytotalPoints : null}</PointValue>
        )}
      </PointType>
      <PointType>
        <PointName>
          {!isClaim ? (
            <Text>Tweet Point</Text>
          ) : (
            <Text>CrypDom token earned</Text>
          )}
          {!isClaim && <AiFillInteraction style={iconStyle} />}
        </PointName>
        {!isClaim ? (
          <PointValue>
            ...
            {/* {UserDatas ? UserDatas.user.interactionPoint : null} */}
          </PointValue>
        ) : (
          <PointValue>{UserDatas ? UserDatas.myTokenPoints : null}</PointValue>
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
              : UserDatas
              ? UserDatas.user.totalrollingPoints
              : null}
            {/* {UserDatas ? UserDatas.user.totalrollingPoints : null} */}
          </PointValue>
        ) : (
          <Claim onClick={() => dispatch(updataClaimFunction(true))}>
            Claim
          </Claim>
        )}
      </PointType>
    </PointBox>
  );
}

export default MobilePoints;

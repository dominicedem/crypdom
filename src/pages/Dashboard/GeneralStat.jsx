import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import numberFormater from "../../helper/numberFormatter";

const GeneralStatBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-top: -6rem;
  }
`;
const StatDescription = styled.h1`
  font-size: 5rem;
  margin-bottom: 4rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 470px) {
    font-size: 4.5rem;
  }
  @media (max-width: 410px) {
    font-size: 4rem;
  }
`;
const AllPointBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  @media (max-width: 645px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15rem;
    row-gap: 5rem;
  }
  @media (max-width: 445px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    row-gap: 5rem;
  }
  /* @media (max-width: 575px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    row-gap: 5rem;
  } */
`;
const PointBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 0.3rem solid #ccc;
  padding-top: 0.5rem;
`;
const TotalFollowPoint = styled.span`
  font-size: 4rem;
  color: #bbb;
  @media (max-width: 575px) {
    font-size: 3.5rem;
  }
  @media (max-width: 445px) {
    font-size: 3rem;
  }
  /* @media (max-width: 405px) {
    font-size: 2.5rem;
  } */
`;
const PointName = styled.p`
  font-size: 1.5rem;
  color: var(--secondary_text_color);
  @media (max-width: 470px) {
    font-size: 1.4rem;
  }
`;

function GeneralStat() {
  const { UserDatas } = useSelector((state) => state.userData);
  const [totalInteraction, setTotalInteraction] = useState(
    () => UserDatas && UserDatas.statistics.totalInteractionPoints
  );
  let ENDPOINT = import.meta.env.VITE_BackendEndPoint;
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", () => {});

    // Listen for events
    socket.on("interaction", (data) => {
      setTotalInteraction(() => data && data.totalInteractionPoints);
    });
    socket.on("ticket", (data) => {});

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);

  return (
    <GeneralStatBox>
      <StatDescription>General Statistics</StatDescription>
      <AllPointBox>
        <PointBox>
          <TotalFollowPoint>
            {UserDatas ? numberFormater(UserDatas.statistics.totalUsers) : 0}
          </TotalFollowPoint>
          <PointName>Total Users</PointName>
        </PointBox>
        <PointBox>
          <TotalFollowPoint>
            {UserDatas
              ? numberFormater(UserDatas.statistics.totalUsers * 1000)
              : 0}
          </TotalFollowPoint>
          <PointName>Total social point</PointName>
        </PointBox>
        <PointBox>
          <TotalFollowPoint>
            {UserDatas
              ? numberFormater(UserDatas.statistics.totalTicketPoints)
              : 0}
          </TotalFollowPoint>
          <PointName>Total Ticket point</PointName>
        </PointBox>
        <PointBox>
          <TotalFollowPoint>
            {totalInteraction
              ? totalInteraction
              : UserDatas
              ? UserDatas.statistics.totalInteractionPoints
              : 0}
          </TotalFollowPoint>
          <PointName>Total interaction point</PointName>
        </PointBox>
      </AllPointBox>
    </GeneralStatBox>
  );
}

export default GeneralStat;

import styled from "styled-components";
import { AiFillCalculator } from "react-icons/ai";
import Calculator from "./Calculator";
import { useSelector } from "react-redux";
import CopyToClipboard from "./CopyToClipboard";
const CalculatorSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CalculatorHead = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  /* padding: 1rem 0; */
  font-size: 3rem;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ViewBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: start;
  border: 0.1px solid #49494d;
  background-color: #141414e1;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
`;
const PointValue = styled.p`
  display: flex;
  color: #ccc;
  font-size: 1.5rem;
  align-items: flex-end;
  flex: 1;
`;
const CalBox = styled.div`
  width: 80%;
  flex: 4.5;
`;
const TotalPoint = styled.div`
  width: 30%;
  border: 0.1px solid #49494d;
  background-color: #141414e1;
  padding: 0.8rem 1.2rem;
  border-radius: 0.7rem;
  color: #ccc;
  font-size: 1.6rem;
  @media (max-width: 930px) {
    width: 35%;
  }
  @media (max-width: 400px) {
    width: 40%;
  }
`;
const iconStyle = {
  fontSize: "2rem",
  color: "#222",
  background: "-webkit-linear-gradient(#aaaaaaef, #707070f0)",
  borderRadius: "0.5rem",
  padding: "0.2rem 0.2rem",
};
const Ref = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;
const Reflink = styled.p`
  font-size: 1.6rem;
  color: #7f7f8d;
  width: 30vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 700px) {
    width: 40vw;
  }
  @media (max-width: 500px) {
    width: 52vw;
  }
`;

function CalculatorSection() {
  const { viewPoint, likePoint, commentPoint, quotePoint } = useSelector(
    (state) => state.dashboardData
  );
  const { isClaim } = useSelector((state) => state.applayout);
  const { UserDatas } = useSelector((state) => state.userData);
  let totalPoint = 1000 + viewPoint + likePoint + commentPoint + quotePoint;
  return (
    <CalculatorSectionBox>
      <CalculatorHead>
        <p>Calculator</p> <AiFillCalculator style={iconStyle} />
      </CalculatorHead>
      <ViewBox>
        <CalBox>
          <Calculator type="views" />
        </CalBox>
        <PointValue>{viewPoint} Point</PointValue>
      </ViewBox>
      <ViewBox>
        <CalBox>
          <Calculator type="likes" />
        </CalBox>
        <PointValue>{likePoint} Point</PointValue>
      </ViewBox>
      <ViewBox>
        <CalBox>
          <Calculator type="comments" />
        </CalBox>
        <PointValue>{commentPoint} Point</PointValue>
      </ViewBox>
      <ViewBox>
        <CalBox>
          <Calculator type="quotes" />
        </CalBox>
        <PointValue>{quotePoint} Point</PointValue>
      </ViewBox>
      <TotalPoint>Total Point: {totalPoint}</TotalPoint>
      {!isClaim && (
        <Ref>
          <Reflink>
            Referral:{" "}
            {`https://CrypDom.tech?ref=${
              UserDatas && UserDatas.user.twitterId
            }`}
          </Reflink>
          <CopyToClipboard
            textToCopy={`https://CrypDom.tech?ref=${
              UserDatas && UserDatas.user.twitterId
            }`}
          />
        </Ref>
      )}
    </CalculatorSectionBox>
  );
}

export default CalculatorSection;

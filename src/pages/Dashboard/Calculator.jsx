import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import {
  updateViewPoint,
  updateLikePoint,
  updateCommentPoint,
  updateQuotePoint,
} from "../../feature/Slices/DashboardSlice";
import { useDispatch } from "react-redux";
const CalculatorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ccc;
`;
const ViewStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Views = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 0.5rem;
`;
const RangeBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const MinValue = styled.div`
  font-size: 1.5rem;
  flex: 1;
`;
const Range = styled.input`
  width: 80%;
  accent-color: #ccc;
  flex: 8;
`;
const MaxValue = styled.div`
  font-size: 1.5rem;
  flex: 1;
`;

const IconStyle = {
  color: "var(--primary_text_color)",
  width: "2rem",
  height: "2rem",
};

function Calculator({ type }) {
  const [viewValues, setViewValues] = useState(0);
  const [likeValues, setLikeValues] = useState(0);
  const [commentsValues, setCommentsValues] = useState(0);
  const [quotesValues, setQuotesValues] = useState(0);

  const dispatch = useDispatch();

  const runUpdate = useCallback(
    function runUpdate(e) {
      switch (type) {
        case "views":
          return dispatch(updateViewPoint(viewValues * 1000));
        case "likes":
          return dispatch(updateLikePoint(likeValues * 2500));
        case "comments":
          return dispatch(updateCommentPoint(commentsValues * 5000));
        case "quotes":
          return dispatch(updateQuotePoint(quotesValues * 10000));
        default:
          throw new Error("Request not found");
      }
    },
    [type, dispatch, viewValues, likeValues, commentsValues, quotesValues]
  );

  useEffect(() => {
    runUpdate();
  }, [runUpdate]);

  return (
    <CalculatorBox>
      {type === "views" && (
        <ViewStats>
          <Views>
            <FaEye style={IconStyle} /> Views
          </Views>
          <RangeBox>
            <MinValue>{viewValues * 1000} </MinValue>
            <Range
              type="range"
              value={viewValues}
              max={5}
              onChange={(e) => setViewValues(e.target.value)}
            />
            <MaxValue>5000</MaxValue>
          </RangeBox>
        </ViewStats>
      )}
      {type === "likes" && (
        <ViewStats>
          <Views>
            <AiFillLike style={IconStyle} /> Like
          </Views>
          <RangeBox>
            <MinValue>{likeValues * 1000}</MinValue>
            <Range
              type="range"
              value={likeValues}
              max={5}
              onChange={(e) => setLikeValues(e.target.value)}
            />
            <MaxValue>12500</MaxValue>
          </RangeBox>
        </ViewStats>
      )}
      {type === "comments" && (
        <ViewStats>
          <Views>
            <BiComment style={IconStyle} /> Comment
          </Views>
          <RangeBox>
            <MinValue>{commentsValues * 1000}</MinValue>
            <Range
              type="range"
              value={commentsValues}
              max={5}
              onChange={(e) => setCommentsValues(e.target.value)}
            />
            <MaxValue>25000</MaxValue>
          </RangeBox>
        </ViewStats>
      )}
      {type === "quotes" && (
        <ViewStats>
          <Views>
            <BiSolidQuoteRight style={IconStyle} /> Quote
          </Views>
          <RangeBox>
            <MinValue>{quotesValues * 1000}</MinValue>
            <Range
              type="range"
              value={quotesValues}
              max={5}
              onChange={(e) => setQuotesValues(e.target.value)}
            />
            <MaxValue>50000</MaxValue>
          </RangeBox>
        </ViewStats>
      )}
    </CalculatorBox>
  );
}

export default Calculator;

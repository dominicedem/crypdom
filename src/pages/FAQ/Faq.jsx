import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";

const QestansBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  width: 90%;
  gap: 0.5rem;
  padding: 2rem 2rem;
  cursor: pointer;
  &:hover {
    border-radius: 0.7rem;
    background: #58585818;
  }
`;
const Question = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-weight: bold;
  width: 95%;
  font-size: 1.6rem;
  @media (max-width: 500px) {
    width: 99%;
    font-size: 1.5rem;
  }
`;
const Answer = styled.div`
  width: 95%;
  font-size: 1.6rem;
  color: var(--secondary_text_color);
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const Iconbox = styled.div``;
const showAns = {
  border: "0.1px solid #49494d",
  background: "#141414e1",
  borderLeft: "3px solid #66667c",
  padding: "1.5rem 1.5rem",
  borderRadius: "0.7rem",
};
const iconStyle = {
  fontSize: "2.5rem",
  color: "#ccc",
};

function Faq({ data, ids, setIds }) {
  return (
    <QestansBox
      onClick={() => {
        setIds((ids) => (ids !== data.id ? data.id : null));
      }}
      style={ids === data.id ? showAns : null}
    >
      <Question>
        {data.questions}
        <Iconbox>
          {ids === data.id ? (
            <FiChevronDown style={iconStyle} />
          ) : (
            <BsChevronRight style={iconStyle} />
          )}
        </Iconbox>
      </Question>
      {ids === data.id && <Answer>{data.answer}</Answer>}
    </QestansBox>
  );
}

export default Faq;

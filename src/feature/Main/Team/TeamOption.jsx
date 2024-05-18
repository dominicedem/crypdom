import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDevelopement,
  updateMarketing,
  updateCreative,
  updateLeaders,
} from "../../Slices/MainSlice";

const TeamOptionBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  @media (max-width: 500px) {
    gap: 1rem;
  }
  @media (max-width: 415px) {
    gap: 0.5rem;
  }
  /* @media (max-width: 375px) {
    gap: 0.5rem;
  } */
`;
const TeamOptionButton = styled.span`
  cursor: pointer;
  text-transform: capitalize;
  border: 1px solid #b1a17692;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    padding: 0.6rem 0.6rem;
  }
`;

function TeamOption() {
  const dispatch = useDispatch();
  const { leaders, developement, marketing, creative } = useSelector(
    (state) => state.mainData
  );
  return (
    <TeamOptionBox>
      <TeamOptionButton
        className={leaders ? "activeTab" : "inactiveTab"}
        onClick={() => dispatch(updateLeaders(true))}
      >
        Leadership
      </TeamOptionButton>
      <TeamOptionButton
        className={developement ? "activeTab" : "inactiveTab"}
        onClick={() => dispatch(updateDevelopement(true))}
      >
        Development
      </TeamOptionButton>
      <TeamOptionButton
        className={creative ? "activeTab" : "inactiveTab"}
        onClick={() => dispatch(updateCreative(true))}
      >
        Creative
      </TeamOptionButton>
      <TeamOptionButton
        className={marketing ? "activeTab" : "inactiveTab"}
        onClick={() => dispatch(updateMarketing(true))}
      >
        Advisor
      </TeamOptionButton>
    </TeamOptionBox>
  );
}

export default TeamOption;

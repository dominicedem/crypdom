import { useSelector } from "react-redux";
import Team from "./Team";
import styled from "styled-components";
import TeamOption from "./TeamOption";

const TeamsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  transition: all 0.3s;
  transform: scale(1.01);
  @media (max-width: 1010px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 70%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
const TeamHeader = styled.h1`
  text-align: center;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4rem;
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
const TeamOptionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const data = [
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "Dominic E.E",
    TeamRole: "ceo/founder",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "Stein brown",
    TeamRole: "co-founder",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "david jones",
    TeamRole: "product manager",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "daniel white",
    TeamRole: "marketing",
  },
];
const data1 = [
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "dominic E.E",
    TeamRole: "frontend Dev",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "augustine Steve",
    TeamRole: "backend Dev",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "Diana murphy",
    TeamRole: "blockchain Dev",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "emily davis",
    TeamRole: "security expert",
  },
];
const data2 = [
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "patrick John",
    TeamRole: "ui/ux designer",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "ethan torres",
    TeamRole: "graphic designer",
  },
];
const data3 = [
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "kylie morris  ",
    TeamRole: "financial advisor",
  },
  {
    TeamPhoto: `/teamBackPhoto.png`,
    TeamName: "maya stewart",
    TeamRole: "legal advisor",
  },
];

function TeamSection() {
  const { creative, leaders, developement, marketing } = useSelector(
    (state) => state.mainData
  );
  return (
    <>
      <TeamHeader>MEET OUR AMAZING TEAM</TeamHeader>
      <TeamOptionBox>
        <TeamOption />
      </TeamOptionBox>
      {creative && (
        <TeamsBox>
          {data2.map((data, ind) => (
            <Team key={ind} data={data} />
          ))}
        </TeamsBox>
      )}
      {leaders && (
        <TeamsBox>
          {data.map((data, ind) => (
            <Team key={ind} data={data} />
          ))}
        </TeamsBox>
      )}
      {developement && (
        <TeamsBox>
          {data1.map((data, ind) => (
            <Team key={ind} data={data} />
          ))}
        </TeamsBox>
      )}
      {marketing && (
        <TeamsBox>
          {data3.map((data, ind) => (
            <Team key={ind} data={data} />
          ))}
        </TeamsBox>
      )}
    </>
  );
}

export default TeamSection;

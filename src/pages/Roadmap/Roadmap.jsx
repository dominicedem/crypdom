import styled from "styled-components";
const RoadmapBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  background: #000000;
`;
const Roadmapimg = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    height: 71.8vh;
  }
  @media (max-width: 500px) {
    height: 77vh;
  }
`;
const RoadmapHeader = styled.h1`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 2rem;
  font-size: 4.5rem;
  text-transform: uppercase;
`;

function Roadmap() {
  return (
    <RoadmapBox>
      <RoadmapHeader> Roadmap</RoadmapHeader>
      <Roadmapimg src="/roadmap.jpg" alt="roadmap" />
    </RoadmapBox>
  );
}

export default Roadmap;

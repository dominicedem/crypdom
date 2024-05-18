import styled from "styled-components";

const TeamBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const TeamDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  gap: 0.5rem;
`;
const TeamPhoto = styled.div`
  width: 16rem;
  height: 14.5rem;
  border-radius: 0.5rem;
  background: #111;
`;
const TeamPhotoBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: linear-gradient(#000, #111);
`;
const OverlayTeamPhoto = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8rem;
  height: 8rem;
  filter: brightness(80%);
  transform: translate(-50%, -50%);
  @media (max-width: 500px) {
    width: 7rem;
    height: 7rem;
  }
`;
const TeamName = styled.h2`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;
const TeamRole = styled.p`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b59743b7);
  /* background: -webkit-linear-gradient(#eeeeee, #b4b4b4); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  font-size: 1.15rem;
`;

function Team({ data }) {
  return (
    <>
      <TeamBox>
        <TeamPhotoBox>
          <TeamPhoto></TeamPhoto>
          <OverlayTeamPhoto src="logo.png" alt="OverlayTeamPhoto" />
        </TeamPhotoBox>
        <TeamDescription>
          <TeamName>{data.TeamName}</TeamName>
          <TeamRole>{data.TeamRole}</TeamRole>
        </TeamDescription>
      </TeamBox>
    </>
  );
}

export default Team;

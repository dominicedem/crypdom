import styled from "styled-components";

const PlatformBox = styled.div`
  margin: 0 auto 12rem auto;
`;

const AppliedToBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IntegratingText = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 4rem;
  color: #7e7e7e;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 490px) {
    font-size: 1.6rem;
  }
`;
const IntegrateBox = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  filter: grayscale(1);
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const PlatformName = styled.div`
  color: #eee;
  font-size: 2.2rem;
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 490px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.8rem;
  }
`;
const Img = styled.img`
  width: 6rem;
  @media (max-width: 490px) {
    width: 5rem;
  }
  @media (max-width: 460px) {
    width: 4rem;
  }
`;

function AppliedTo() {
  return (
    <>
      <IntegratingText>Integrating</IntegratingText>
      <PlatformBox>
        <AppliedToBox>
          <IntegrateBox>
            <Img src="/twitter.png" alt="Platform" />
            <PlatformName>Twitter</PlatformName>
          </IntegrateBox>
          <IntegrateBox>
            <Img src="/discord.png" alt="Platform" />
            <PlatformName>Discord</PlatformName>
          </IntegrateBox>
          <IntegrateBox>
            <Img src="/telegram.png" alt="Platform" />
            <PlatformName>Telegram</PlatformName>
          </IntegrateBox>
          <IntegrateBox>
            <Img src="/reddit.png" alt="Platform" />
            <PlatformName>Reddit</PlatformName>
          </IntegrateBox>
        </AppliedToBox>
      </PlatformBox>
    </>
  );
}

export default AppliedTo;

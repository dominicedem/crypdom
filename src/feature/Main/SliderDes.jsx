import styled from "styled-components";

const SliderDesbox = styled.div`
  display: flex;
  border-radius: 1rem;
  background: linear-gradient(135deg, #222 5%, #000 95%);
  height: 60vh;
`;

const rightstyle = {
  background: "linear-gradient(135deg, #000 5%, #222 95%)",
};

const SliderDesText = styled.p`
  font-size: 2rem;
  color: var(--secondary_text_color);
  @media (max-width: 950px) {
    font-size: 1.9rem;
  }
`;
const SliderDesImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  opacity: 90%;
  box-shadow: 0 0 1rem 1rem #0002;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.1);
  }
  filter: grayscale(100%);
  @media (max-width: 700px) {
    filter: grayscale(70%);
  }
`;
const Imagebox = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 1rem #0002;
  width: 50%;
  @media (max-width: 950px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    box-shadow: 0 0.5rem 1rem 1rem #000a;
    width: 100%;
    height: 60vh;
    position: relative;
  }
`;
const OverlayBackground = styled.div`
  background: #00000055;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 0 0 2rem;
`;
const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const Head = styled.h2`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 4rem;
  width: 70%;
  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media (max-width: 480px) {
    font-size: 3.3rem;
    width: 90%;
  }
`;
const Subhead = styled.h2`
  color: var(--secondary_text_color);
  font-weight: bold;
  width: 60%;
  font-size: 2rem;
  @media (max-width: 530px) {
    font-size: 1.9rem;
  }
`;
const SliderSubHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 50%;
  gap: 2.5rem;
  padding: 2rem;
`;
const SliderSubHeader = styled.h1`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
  color: var(--primary_text_color);
  @media (max-width: 970px) {
    font-size: 4.4rem;
  }
`;

function SliderDes({ data, desktop, mobile }) {
  return (
    <>
      {desktop==="true" && (data.id + 1) % 2 === 0 && (
        <SliderDesbox>
          <SliderSubHeaderBox>
            <SliderSubHeader>{data.sub}</SliderSubHeader>
            <SliderDesText>{data.description}</SliderDesText>
          </SliderSubHeaderBox>
          <Imagebox>
            <SliderDesImg alt="logo" src={data.image_url} />
          </Imagebox>
        </SliderDesbox>
      )}
      {desktop==="true" && (data.id + 1) % 2 !== 0 && (
        <SliderDesbox style={rightstyle}>
          <Imagebox>
            <SliderDesImg alt="logo" src={data.image_url} />
          </Imagebox>
          <SliderSubHeaderBox>
            <SliderSubHeader>{data.sub}</SliderSubHeader>
            <SliderDesText>{data.description}</SliderDesText>
          </SliderSubHeaderBox>
        </SliderDesbox>
      )}
      {mobile==="true" && (
        <Imagebox>
          <SliderDesImg alt="logo" src={data.image_url} />
          <OverlayBackground>
            <Textbox>
              <Head>{data.sub}</Head>
              <Subhead>{data.description}</Subhead>
            </Textbox>
          </OverlayBackground>
        </Imagebox>
      )}
    </>
  );
}

export default SliderDes;

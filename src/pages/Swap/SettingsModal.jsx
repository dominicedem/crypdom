import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNotify, updateSettings } from "../../feature/Slices/TokenSlice";
import { BsExclamation } from "react-icons/bs";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  width: 40vw;
  background: linear-gradient(60deg, #444d, #3337);
  border-radius: 1rem;
  backdrop-filter: blur(5px);
  @media (max-width: 850px) {
    width: 50vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
  }
  @media (max-width: 700px) {
    width: 55vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 650px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 75vw;
  }
  @media (max-width: 400px) {
    width: 85vw;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: ${(props) => (props.header ? "2rem" : "0")};
`;
const ExclaimBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 0.1rem solid var(--secondary_text_color);
`;
const Head = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const iconStyle = {
  fontSize: "2.5rem",
  color: "var(--primary_text_color)",
  cursor: "pointer",
};
const iconStyles = {
  fontSize: "2rem",
  color: "var(--secondary_text_color)",
  cursor: "pointer",
};

const Text = styled.p`
  font-size: 1.4rem;
  color: #c9c9c9f4;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
`;
const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  accent-color: var(--secondary_text_color);
`;

const Save = styled.span`
  font-size: 2rem;
  color: #eeeeee;
  background: #131313;
  text-align: center;
  border: none;
  width: 90%;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin-top: 2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 1rem 0.01rem #cccccc44;
  }
`;

function SettingsModal() {
  const dispatch = useDispatch();

  function openNotify() {
    dispatch(updateNotify(true));
    dispatch(updateSettings(false));
    setTimeout(() => dispatch(updateNotify(false)), [2000]);
  }
  return (
    <ModalWrapper>
      <Header header={true}>
        <Head>General settings</Head>
        <RxCross2
          style={iconStyle}
          onClick={() => dispatch(updateSettings(false))}
        />
      </Header>
      <Header>
        <Text>
          Direct route only
          <ExclaimBox>
            <BsExclamation style={iconStyles} />
          </ExclaimBox>
        </Text>
        <Input type="checkbox" />
      </Header>
      <Header>
        <Text>
          use wBaseEth
          <ExclaimBox>
            <BsExclamation style={iconStyles} />
          </ExclaimBox>
        </Text>
        <Input type="checkbox" />
      </Header>
      <Header>
        <Text>
          versioned transaction
          <ExclaimBox>
            <BsExclamation style={iconStyles} />
          </ExclaimBox>
        </Text>
        <Input type="checkbox" checked />
      </Header>
      <Save onClick={() => openNotify()}>Save Settings</Save>
    </ModalWrapper>
  );
}

export default SettingsModal;

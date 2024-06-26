import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";

const NotifyStyle = styled.div`
  font-size: 1.8rem;
  color: var(--primary_text_color);
  position: relative;
  padding: 1.5rem 2rem;
  background: linear-gradient(60deg, #444d, #3337);
  cursor: pointer;
  z-index: 10000;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &::before {
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f0f0f1;
    height: 3px;
    position: absolute;
  }
`;
const iconstyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "var(--primary_text_color)",
};
export default function Notify({ notify }) {
  return (
    <NotifyStyle className={notify && "notify"}>
      <FaRegCheckCircle style={iconstyle} />
      Settings saved
    </NotifyStyle>
  );
}

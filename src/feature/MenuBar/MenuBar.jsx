import styled from "styled-components";
import { FaRoad } from "react-icons/fa";
import { SiBaremetrics } from "react-icons/si";
import { GiTrade } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { TiTicket } from "react-icons/ti";
import { updateMenu, updateToggleMenu } from "../Slices/MainSlice";
import { useDispatch, useSelector } from "react-redux";
import { activateIsAirdropWarning } from "../Slices/AppSlice";
const MenuBarBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 2rem;
  width: 100vw;
  height: 85vh;
`;
const ConnectBox = styled.span`
  font-size: 2rem;
  align-self: center;
  padding: 0.7rem 2rem;
  margin: 1rem 0 0.5rem 0;
  border-radius: 1rem;
  color: #222;
  cursor: pointer;
  transition: all 0.3s;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  &:hover {
    background: -webkit-linear-gradient(#d8d8d8, #969595);
  }
`;
const DocBox = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 2.5rem;
  margin-bottom: 0.5rem;
`;
const Doc = styled.div`
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: var(--hover_color);
  }
`;

const MenuTextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const MenuText = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 1.4rem 4.5rem;
  transition: all 0.2s;
  color: #e5e5e5;
  &:hover {
    cursor: pointer;
    background: #58585818;
    color: #d4d4d4;
  }
`;
const IconStyle = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
const linkStyle = {
  textDecoration: "none",
  width: "100%",
};

function MenuBar() {
  const { isAirdrop } = useSelector((state) => state.applayout);
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(updateMenu(false));
    dispatch(updateToggleMenu(true));
  }
  function handleconnectTwitter() {
    if (!isAirdrop) {
      dispatch(activateIsAirdropWarning(true));
      setTimeout(() => dispatch(activateIsAirdropWarning(false)), 3000);
    } else {
      window.location.href = import.meta.env.VITE_authTwitter;
    }
  }
  return (
    <MenuBarBox>
      <ConnectBox onClick={() => handleconnectTwitter()}>
        Connect twitter
      </ConnectBox>
      <DocBox>
        <Doc
          onClick={() => window.open(import.meta.env.VITE_SolanaDocs, "_blank")}
        >
          Solana doc
        </Doc>
        <Doc
          onClick={() => window.open(import.meta.env.VITE_Website, "_blank")}
        >
          Whitepaper
        </Doc>
      </DocBox>
      <MenuTextBox>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="dashboard">
          <MenuText>
            <MdDashboard style={IconStyle} />
            Dashboard
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="swap">
          <MenuText>
            <BiTransfer style={IconStyle} />
            Swap
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="ticket">
          <MenuText>
            <TiTicket style={IconStyle} />
            Ticket
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="roadmap">
          <MenuText>
            <FaRoad style={IconStyle} />
            Roadmap
          </MenuText>{" "}
        </NavLink>
        <NavLink
          onClick={() => handleClose()}
          style={linkStyle}
          to="tokenomics"
        >
          <MenuText>
            <SiBaremetrics style={IconStyle} />
            Tokenomics
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="airdrop">
          <MenuText>
            <BiTransfer style={IconStyle} />
            Airdrop
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="trade">
          <MenuText>
            <GiTrade style={IconStyle} />
            Market
          </MenuText>{" "}
        </NavLink>
      </MenuTextBox>
    </MenuBarBox>
  );
}

export default MenuBar;

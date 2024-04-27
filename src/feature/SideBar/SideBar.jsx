import styled from "styled-components";
import { FaRoad } from "react-icons/fa";
import { SiBaremetrics } from "react-icons/si";
import { BiTransfer } from "react-icons/bi";
import { GiTrade } from "react-icons/gi";
import { MdCasino } from "react-icons/md";
import { TiTicket } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebarbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 0;
  font-size: 1.8rem;
  gap: 2rem;
  position: relative;
`;
const Comingsoon = styled.p`
  position: absolute;
  font-size: 1.5rem;
  padding: 1.3rem 2rem;
  border-radius: 0.3rem;
  top: 98%;
  right: -20%;
  color: #ddd;
  transform: translate(-50%, -50%);
  background: -webkit-linear-gradient(#3f3f3f, #1a1a1a);
  clip-path: polygon(
    0 15%,
    45% 15%,
    50% 0,
    55% 15%,
    100% 15%,
    100% 100%,
    0 100%
  );
  @media (max-width: 1030px) {
    right: -38%;
  }
`;

const SidebarList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 80%;
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
  width: "2rem",
  height: "2rem",
};

const linkStyle = {
  textDecoration: "none",
  width: "100%",
};

function SideBar() {
  const [openCasinoTab, setOpenCasinoTab] = useState(false);

  function handleEnter(casino) {
    casino && setOpenCasinoTab(true);
  }
  function handleLeave(casino) {
    casino && setOpenCasinoTab(false);
  }
  return (
    <Sidebarbox>
      <NavLink style={linkStyle} to="swap">
        <SidebarList>
          <BiTransfer style={IconStyle} /> Swap
        </SidebarList>
      </NavLink>
      <NavLink style={linkStyle} to="ticket">
        <SidebarList>
          <TiTicket style={IconStyle} /> Ticket
        </SidebarList>
      </NavLink>
      <NavLink style={linkStyle} to="roadmap">
        <SidebarList>
          <FaRoad style={IconStyle} /> Roadmap
        </SidebarList>
      </NavLink>
      <NavLink style={linkStyle} to="tokenomics">
        <SidebarList>
          <SiBaremetrics style={IconStyle} /> Tokenomics
        </SidebarList>
      </NavLink>
      <NavLink style={linkStyle} to="trade">
        <SidebarList>
          <GiTrade style={IconStyle} /> Market
        </SidebarList>
      </NavLink>
      <SidebarList
        onMouseLeave={() => handleLeave(true)}
        onMouseOver={() => handleEnter(true)}
        onClick={() => handleEnter(true)}
      >
        <MdCasino style={IconStyle} /> Casino
        {openCasinoTab && <Comingsoon>Coming soon...</Comingsoon>}
      </SidebarList>
    </Sidebarbox>
  );
}

export default SideBar;

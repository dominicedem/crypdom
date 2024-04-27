import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import Login from "../Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMenu, updateToggleMenu } from "../Slices/MainSlice";

const Companydescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;
const CompanyLogo = styled.img`
  width: 3.5rem;
  @media (max-width: 575px) {
    width: 4rem;
  }
`;
const CompanyName = styled.div`
  background-clip: text;
  background: -webkit-linear-gradient(#eeeeee, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.2rem;
`;

const CtaNav = styled.span`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavStyle = styled.div`
  font-size: 1.7rem;
  color: var(--primary_text_color);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--hover_color);
  }
`;
const PageNav = styled.span`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;
const MenuStyle = {
  color: "#cececeee",
  width: "2rem",
  height: "2rem",
  padding: "1rem",
  background: "#222",
  borderRadius: "0.5rem",
};
const LinkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: "0.5rem",
};

function Nav() {
  const { toggleMenu } = useSelector((state) => state.mainData);

  const dispatch = useDispatch();
  useEffect(() => {
    toggleMenu ? dispatch(updateMenu(false)) : dispatch(updateMenu(true));
  }, [toggleMenu, dispatch]);
  return (
    <>
      <Companydescription onClick={() => dispatch(updateToggleMenu(true))}>
        <Link style={LinkStyle} to="/">
          <CompanyLogo src="/logo.png" alt="logo" />
          <CompanyName>CRYPDOM</CompanyName>
        </Link>
      </Companydescription>
      <PageNav>
        <NavLink className="navLinks" to="dashboard">
          Dashboard
        </NavLink>
        <NavStyle
          onClick={() => window.open(import.meta.env.VITE_Website, "_blank")}
        >
          Whitepaper
        </NavStyle>
        <NavLink className="navLinks" to="airdrop">
          Airdrop
        </NavLink>
        <NavStyle
          onClick={() => window.open(import.meta.env.VITE_SolanaDocs, "_blank")}
        >
          Solana Doc
        </NavStyle>
      </PageNav>
      <CtaNav>
        <Login />
      </CtaNav>
      {toggleMenu ? (
        <Menu onClick={() => dispatch(updateToggleMenu(false))}>
          <SlMenu style={MenuStyle} />
        </Menu>
      ) : (
        <Menu onClick={() => dispatch(updateToggleMenu(true))}>
          <AiOutlineClose style={MenuStyle} />
        </Menu>
      )}
    </>
  );
}

export default Nav;

import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface LinkProps {
  isActive: boolean;
}

export default function NavBar() {
  const location = useLocation();
  //   const navigation = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Navigation>
        {/* <button onClick={() => navigation(-1)}>Back</button> */}
        <LinkStyled to={"/"} isActive={location.pathname === "/"}>
          Top Stories
        </LinkStyled>
        {/* <LinkStyled to={"/article/:id"} isActive={location.pathname === "/article/:id"}>Article Details</LinkStyled> */}

        {user ? <p>{user.email}</p> : <p></p>}
        {!user ? (
          <LinkStyled to={"/auth"} isActive={location.pathname === "/auth"}>
            Login
          </LinkStyled>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </Navigation>
    </>
  );
}

// STYLING

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 0 5em;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
`;

const LinkStyled = styled(Link)<LinkProps>`
  ${({ isActive }) =>
    isActive &&
    css`
      color: hotpink;
      text-decoration: none;
      font-weight: bold;
    `}

  ${({ isActive }) =>
    !isActive &&
    css`
      color: grey;
      text-decoration: none;
    `}
`;

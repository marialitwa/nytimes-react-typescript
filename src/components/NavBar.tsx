import styled, { css } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface LinkProps {
    isActive: boolean;
}


export default function NavBar() {

    const location = useLocation();
    // console.log(location)

    const navigation = useNavigate();
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <Navigation>
                <LinkStyled to={"/"} isActive={location.pathname === "/"}>Home</LinkStyled>
                <LinkStyled to={"/articles"} isActive={location.pathname === "/articles"}>Articles</LinkStyled>
                {/* <LinkStyled to={"/article/:id"} isActive={location.pathname === "/article/:id"}>Article Details</LinkStyled> */}
                { !user ? 
                    <LinkStyled to={"/auth"} isActive={location.pathname === "/auth"}>Login</LinkStyled> 
                    : 
                    <button onClick={logout}>Logout</button>    
                }
                <button onClick={() => navigation(-1)}>Back</button>
                { user ? <p>{user.email}</p> : <p>No user logged in</p>}
            </Navigation>
        
        </>
    )
}



// STYLING

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    padding: 0 1em;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    
`;

const LinkStyled = styled(Link)<LinkProps>`

    ${({ isActive }) => isActive && css`
        color: hotpink;
        text-decoration: none;
        font-weight: bold;
    `}

    ${({ isActive }) => !isActive && css`
        color: grey;
        text-decoration: none;
    `}

`;


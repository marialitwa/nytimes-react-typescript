import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface LinkProps {
    isActive: boolean;
}


export default function NavBar() {

    const location = useLocation();
    // console.log(location)

    return (
        <>
            <Navigation>
                <LinkStyled to={"/"} isActive={location.pathname === "/"}>Home</LinkStyled>
                <LinkStyled to={"/story"} isActive={location.pathname === "/story"}>Story</LinkStyled>
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
    border: 1px solid hotpink;
    
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
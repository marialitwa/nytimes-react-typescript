import styled, { css } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface LinkProps {
    isActive: boolean;
}


export default function NavBar() {

    const location = useLocation();
    // console.log(location)

    const navigation = useNavigate();

    return (
        <>
            <Navigation>
                <LinkStyled to={"/"} isActive={location.pathname === "/"}>Home</LinkStyled>
                <LinkStyled to={"/story"} isActive={location.pathname === "/story"}>Story</LinkStyled>
                <button onClick={() => navigation(-1)}>Back</button>
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
        _color: #18171a;
        color: hotpink;
        text-decoration: none;
        font-weight: bold;
    `}

    ${({ isActive }) => !isActive && css`
        color: grey;
        text-decoration: none;
    `}

`;
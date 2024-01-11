import styled from "styled-components";
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
        <>
            <Navigation>
                <Link to={"/"}>Home</Link>
                <Link to={"/story"}>Story</Link>
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
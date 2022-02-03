import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
width:100%;
height:40px;
padding:0 2em;
display:flex;
align-items:center;
${'' /* cursor:pointer; */}
justify-content:space-between
`

const BrandCantainer = styled.div``;
const AccessibilityContainer = styled.div`
display:flex;
flex-direction:row;
`;

const LoginButton = styled(Button)`
background-color: transparent;
border:none;
&:hover{
    background-color:transparent;
    border:none;
    color: rgb(212,212,212);
}
`


export function Navbar(props){
    return <NavbarContainer>
        <BrandCantainer>
            <Logo inline/>
        </BrandCantainer>
        <AccessibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton small>Login</LoginButton>
        </AccessibilityContainer>
    </NavbarContainer>
}
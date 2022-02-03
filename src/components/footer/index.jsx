
import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";



const FooterContainer = styled.div`
width:100%;
height:620px;
display:flex;
align-items:center;
flex-direction:column;
background-color:#1f1f1f;
position:relative;
`;

const MotivationalText = styled.h1`
font-size:28px;
line-height:1.3;
font-weight:500;
color: #fff;
margin:0;
`;
// const Line = styled.span`
// min-width:100%;
// min-height:1px;
// margin-bottom:1em;
// ${'' /* background-color:#cdcdcd; */}
// display:flex;
// `;
const AccessibilityContainer =styled.div`
width:80%;
display:flex;
border-top:1px solid #cdcdcd;
padding-top:6px;
padding-right:10px;
padding-left:10px;
color:#fff;
justify-content:space-between;
`

const PrivacyContainer = styled.div`
display:flex;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
color:#fff;
font-size:20px;
transition:all 200ms ease-in-out;
cursor:pointer;

&:not(:last-of-type){
    margin-right:10px;
    @media screen and (max-width:480px){
   margin-right:3px; 
}
}
@media screen and (max-width:480px){
   font-size: 14px; 
}
&:hover{
    color:#adadad;
}


`

const Link = styled.a`
color: #fff;
transition:all 200ms ease-in-out;
cursor:pointer;
font-size:15px;

&:not(:last-of-type){
    margin-right:10px;
    @media screen and (max-width:480px){
   margin-right:4px; 
}
}
@media screen and (max-width:480px){
   font-size: 11px; 
}
&:hover{
    color:#adadad;

}

`

const RightsReserved = styled.div`
position:absolute;
bottom:8px;
left:50%;
trasnform:transleteX(-50%);
color:#fff;
font-size:12px;

`;

export function Footer(props){
    return(
        <FooterContainer>
            <Marginer direction="vertical" margin="6em"/>
            <Logo small/>
            <Marginer direction="vertical" margin="4em"/>
            <MotivationalText>Just say the magical word</MotivationalText>
            <MotivationalText>and we will do the rest</MotivationalText>
            <Marginer direction="vertical" margin="3em"/>
            <Button>Start your Project</Button>
            <Marginer direction="vertical" margin="6em"/>
            <AccessibilityContainer>
                <PrivacyContainer>
                   <Link>Privacy Policy</Link>
                   <Link>Terms of Service</Link>
                   <Link>Contect</Link>
                </PrivacyContainer>
                <SocialContainer>
                    <SocialIcon> Xy</SocialIcon>
                    <SocialIcon> Yz</SocialIcon>
                </SocialContainer>
            </AccessibilityContainer>
            <RightsReserved> &copy; 2020 Beema All rights reserved</RightsReserved>
        </FooterContainer>
    )
}
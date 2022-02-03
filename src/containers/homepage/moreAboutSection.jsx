import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png"

const MoreAboutContainer =  styled(Element)`
min-height:700px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 0 1em;

@media screen and (max-width:480px){
   width:100%; 
}
`;

const AboutContainer =styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:1000px;
${'' /* flex-wrap: wrap; */}

@media screen and (max-width:480px){
   width:100%;
   flex-wrap: wrap-reverse 
}

`


const AboutText = styled.p`
font-size:20px;
color:#2f2f2f;
font-weight:normal;
line-height:1.3;
padding:60px;
@media screen and (max-width:480px){
    padding: 2px;
`;


const AboutImg =styled.img`
width:500px;
height:400px;

@media screen and (max-width:480px){
    width:350px;
    height:250px;
}
`; 


export function MoreAboutSection(props){
    return(
        <MoreAboutContainer>
            <SectionTitle>More about Beema</SectionTitle>
             <AboutContainer>
                <AboutText>
                    Beema is about designing, building and deliverying best quality software for your company. <br /><br />
                    We make sure that you get the best software inferstracture and set of applications to ensure the best experience of your clients. <br /><br />
                    So wether you are handling thousands of payment transactions or you’re just starting out, you are in the right place. 
                </AboutText>
                <AboutImg src={AboutImgUrl} />
            </AboutContainer>
        </MoreAboutContainer>

    )
}
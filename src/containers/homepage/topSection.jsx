import { counter } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { Element, scroller } from "react-scroll";
import styled from 'styled-components'
import BackgroundImg from "../../assets/pictures/company_team.jpg"
import { Button } from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import { Logo } from '../../components/logo';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';

const TopContainer = styled.div`
width:100%;
height:100vh;
padding:0; 
background-image: url(${BackgroundImg});
position:relative;
`;
const BackgroundFilter = styled.div`
 width:100%;
 height:100%;
 background-color: rgba(55, 55, 55, 0.88);
 display:flex;
 flex-direction:column;
 align-items:center;
`;

const MotivationalText = styled.h1`
font-size:33px;
line-height:1.4;
font-weight:500;
color: #fff;
margin:0;
text-align:center;
`;

const DowmArrowContaiener = styled.div`
position:absolute;
bottom:20px;
left:50%;
transform:translateX(-50%);
`

export function TopSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("ServicesSection", { smooth: true, duration: 1000 });
      };

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Navbar />
                    <Marginer direction="vertical" margin="8em" />
                    <Logo />
                    <Marginer direction="vertical" margin="2em" />
                    <MotivationalText>Softwear Development</MotivationalText>
                    <MotivationalText>Form the Best in the Industry</MotivationalText>
                    <Marginer direction="vertical" margin="2em" />
                    <Button>Start you Project</Button>
                    <DowmArrowContaiener onClick={scrollToNextSection}>
                        <DownArrow />
                    </DowmArrowContaiener>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    )
}

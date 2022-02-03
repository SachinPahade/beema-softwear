import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { ServicesSection } from "./servicesSection";
import { ReviewSection } from "./reviewSection";
import { Marginer } from "../../components/marginer";
import {MoreAboutSection} from "../../containers/homepage/moreAboutSection"
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;

`;
export function Homepage(props){
    return(
        <PageContainer>
            <TopSection/>
            <ServicesSection/>
            <Marginer direction="vertical" margin="1em"/>
            <ReviewSection/>
            <MoreAboutSection/>
            <Marginer direction="vertical" margin="1em"/>
            <Footer/>
        </PageContainer>
    )
}


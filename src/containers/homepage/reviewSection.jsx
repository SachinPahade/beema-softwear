import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import 'pure-react-carousel/dist/react-carousel.es.css';

import User1Img from "../../assets/pictures/profile_picture_1.jpg"
import User2Img from "../../assets/pictures/profile_picture_2.jpg"
import User3Img from "../../assets/pictures/profile_picture_3.jpg"
import User4Img from "../../assets/pictures/profile_picture_4.jpeg"

const ReviewContainer = styled(Element)`
height:700px;
display:flex;
flex-direction:column;
align-items:center;

`;
const StyledCarouselProvider = styled(CarouselProvider)`
width:65%;

@media screen and (max-width:480px){
    width:100%;
}

`;

const StyledSlide = styled(Slide)`
.carousel__inner--slide{
    display:flex;
    justify-content:center;
}
`;

const StyledDotGroup = styled(DotGroup)`
margin:auto;
 display:flex;
 justify-content:center;
button{
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:#e4e4e4;
    border:none;
    outline:none;
    &:not(:last-of-type){
        margin-right:3px;
    }
}
    .carousel__dot--selected{
    background-color:#c4c4c4;

}
`;

export function ReviewSection(props) {
    const isMobile = useMediaQuery({query: "(max-width: 480px)"});

    return (
        <ReviewContainer>
            <SectionTitle>What others are saying about us</SectionTitle>
            <Marginer direction="vertical" margin="3em" />
            <StyledCarouselProvider naturalSlideWidth={200} naturalSlideHeight={isMobile ? 250: 190} totalSlides={4} visibleSlides={isMobile ? 1 : 2} >
                <Slider>
                    <StyledSlide index={1} ><ReviewCard  
                    reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." 
                    username="John coner" 
                    userImg={User1Img}  /></StyledSlide>
                    <StyledSlide index={2} ><ReviewCard reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." 
                    username="Megan borguer" 
                    userImg={User2Img} /></StyledSlide>
                    <StyledSlide index={3} ><ReviewCard reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." 
                    username="Jaxson" 
                    userImg={User3Img} /></StyledSlide>
                    <StyledSlide index={0} ><ReviewCard reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." 
                    username="Robart" 
                    userImg={User4Img} /></StyledSlide>
                </Slider>
                <StyledDotGroup/>
            </StyledCarouselProvider>
        </ReviewContainer>
    )
}
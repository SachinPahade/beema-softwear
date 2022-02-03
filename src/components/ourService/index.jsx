import React from "react";
import styled from "styled-components";


const ServicesContainer = styled.div`
display:flex;
align-items:center;
flex-direction: ${({isReversed})=> isReversed && "row-reverse"};
margin-bottom:3em;
flex-wrap:wrap-reverse;

@media screen and (max-width:480px){
justify-content:center; 
}
`;
const ServiceImg = styled.img`
width:22em;
height:19em;

@media screen and (max-width:480px){
    width:18em;
    height:16em;
}
`;

const DescriptionContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
max-width:60%;

@media screen and (max-width:480px){
    max-width:100%;
}

`
const Title = styled.h2`
color:#000;
font-size:28px;
font-weight:700;
margin:5px 0;
@media screen and (max-width:480px){
margin-top:1em;
}
`;
const Details = styled.p`
color: #7a7a7a;
font-size:18px;
text-align:center;
max-width:55%;
@media screen and (max-width:480px){
width:100%;
}


`

export function OurService(props) {

    const { imgUrl, title, description , isReversed} = props;

    return <ServicesContainer isReversed={isReversed}>
        <DescriptionContainer>
            <Title>{title}</Title>
            <Details>{description}</Details>
        </DescriptionContainer>
        <ServiceImg src={imgUrl} />
    </ServicesContainer>

}
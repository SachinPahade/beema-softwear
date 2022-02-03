
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import icons8 from "../../assets/Icon/icons8-twitter-50.png"


const CardContainer = styled.div`
width:350px;
height:400px;
background-color:#fff;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
border-radius: 3px;
margin:5px 4em;
position:relative;
padding:10px 1.2em;

@media screen and (max-width:480px){
    width:300px;
    margin:5px 2em;
}

`
const QuoteIcon = styled.div`
position:absolute;
top:10px;
left:15px;
color: #D1D1D1;

font-size:35px;

`;

const ReviewText = styled.p`
font-size:17px;
color:#585858;
font-weight:normal;
display:flex;
justify-content:center;
`;
const Line = styled.span`
min-width:100%;
min-height:1px;
margin-bottom:1em;
background-color:#cdcdcd;
display:flex;
`;

const UserDetails = styled.div`
display:flex;
align-items:center;
`;

const UserImg = styled.img`
width:45px;
height:45px;
border-radius:50%;
margin-right:12px; 
position:center; 
`;
const Username = styled.span`
font-size:15px:
color:#000;
`


export function ReviewCard(props){

    const {reviewText, username, userImg} = props;

    return(
         <CardContainer>
         <QuoteIcon ></QuoteIcon>
         <Marginer direction="Vertical" margin="6em" /> 
         <ReviewText>{reviewText}</ReviewText> 
         <Marginer direction="vertical" margin="5em" /> 
         <Line/> 
         <UserDetails>
             <UserImg src={userImg} />
             <Username>{username}</Username>
         </UserDetails>     
         </CardContainer>
    )
}
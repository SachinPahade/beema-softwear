import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theem";


const ArrowContainer = styled.div`
width:46px;
height:46px;
border-radius:50%;
background-color: rgba(113,113,113, 0.48);
display:flex;
justify-content:center;
align-items:center;
border:2px solid transparent;
transition: all 250ms ease-in-out;
cursor:pointer;

&:hover{
    border:2px solid ${theme.primary};
    ${'' /* background-color:transparent; */}
}
`

const ArrowIcon = styled.div`
margin-top:3px;
color:#fff;
font-size:29px;

`

export function DownArrow(){
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown} />
        </ArrowIcon>
    </ArrowContainer>
}
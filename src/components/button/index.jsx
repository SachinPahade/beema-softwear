import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theem'

const ButtonWrapper =styled.button`
padding:${({small})=>(small? "4px 9px":"5px 40px")};
border-radius:5px;
background-color:${theme.primary};
color:#fff;
font-weight:bold;
font-size:${({small})=>(small? "11px":"16px")};
outline:none;
border:2px solid transparent;
transition: all 220ms ease-in-out;
cursor:pointer;

&:hover{
    background-color:transparent;
    border:2px solid ${theme.primary};
}
`

export function Button(props){
    return <ButtonWrapper {...props} >{props.children}</ButtonWrapper>
}

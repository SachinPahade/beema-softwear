import React from 'react'
import styled, { css } from 'styled-components'
import BeemaLogo from "../../assets/logo/logo_croped.png"
import {theme} from "../../theem"


const LogoContainer = styled.div`
display:flex;
flex-direction: ${({inline})=>(inline? "row" :"column")};
${'' /* align-items: ${({inline})=>inline && "center"}; */}
align-items: center;

`

const LogoImg = styled.img`
width:8em;
height:8em;

${({inline})=>
    inline && css`
    width:30px;
    height:30px;
    margin-right:8px;
`};
${({small})=>
    small && css`
    width:5em;
    height:5em;
    ${'' /* margin-right:8px; */}
`};
`;
const LogoText = styled.div`
margin-top:${({inline})=>(inline? "0px":"6px")};
font-size: ${({inline,small})=>(inline? "18px": small? "28px":"40px")};
font-weight:900;
color:${({inline})=>(inline? "#fff":theme.primary)};
`

export function Logo(props) {
    const {inline, small} =props;
    return (
       <LogoContainer inline={inline} small={small} >
           <LogoImg src={BeemaLogo} inline={inline} small={small}/>
            <LogoText inline={inline} small={small} >Beema</LogoText>
       </LogoContainer>
    )
}

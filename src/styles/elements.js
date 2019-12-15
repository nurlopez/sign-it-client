import styled, { css } from 'styled-components'


export const Button = styled.button
`background: transparent;
border: solid 1px #F38630 ;
border-radius: 3px;
color: #F38630;
margin: 0 1em;
padding: 0.25em 1em;
${props => props.primary && css`
border: none;
background: #69D2E7;
color: white;
`}`;



export const ContainerButtons = styled.div
`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
`



export const Signcard = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
`
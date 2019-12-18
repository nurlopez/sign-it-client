import styled, { css } from 'styled-components'



export const Button = styled.button
`background: transparent;
border: solid 1px #F38630 ;
border-radius: 3px;
color: #F38630;
margin: 0 1em;
padding: 0.25em 1em;
a  {
    text-decoration: none;
    color: white;
  }
${props => props.primary && css`
border: none;
background: #69D2E7;
color: white;
`}`;

export const ButtonIcon = styled.button
`
border: none;
background: none;
`

export const ContainerButtons = styled.div
`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
`

export const ContainerSigns = styled.div
`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
text-align:center;
width-max: 100vw;
background-color: #E0E4CC;
`



export const Signcard = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
word-wrap: break-word;
padding: 10px;
background: white;
border: solid 1px white;
border-radius: 5px;
margin: 2px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
img  {
  border-radius: 5px;
}
`

export const Form = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align:center;
`
import styled, { css } from 'styled-components'



export const Button = styled.button
`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
text-align: center;
background: #69D2E7;
font-size: 16px;
border: solid 1px #69D2E7 ;
border-radius: 3px;
color: white;
margin: 1em 1em;
padding: 0.25em 1em;
a  {
    text-decoration: none;
    color: white;
  }
${props => props.primary && css`
border: none;
background: #F38630;
color: white;
`}
${props => props.secondary && css`
border: none;
background: #EF835F;
color: white;
`}`;

export const ButtonIcon = styled.button
`
border: none;
background: none;
`

export const ContainerButtons = styled.div
`
background: transparent;
margin-top:-20px;
padding: 5px 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
a {
  text-decoration: none;
}
`
export const ContainerMySignsButtons = styled.div
`
background: transparent;
margin-top:-20px;
padding: 5px 0px;
display: flex;
width: 250px;
flex-direction: row;
justify-content: space-between;
align-items: center;
text-align:center;
a {
  text-decoration: none;
}
`
export const UpdateButton = styled.div
`

  }
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
background-color: #F9F8F4;
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
margin: 10px 10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
img  {
  border-radius: 5px;
}
p {
  font-size: 16px;
  font-family: "Solway", serif;  
}
`

export const EditForm= styled.div
`
input{
  border: solid 1px red ;
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
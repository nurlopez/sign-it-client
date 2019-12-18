
import styled, { css }  from 'styled-components'



export const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Solway&display=swap");
  background-color: #F38630;
  }
  p {
    font-family: "Solway", serif;
  }
  .signup-btns {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 20px 0px;
   }
`;


export const NavButton = styled.button
`background: transparent;
border: solid 1px #F38630 ;
border-radius: 3px;
color: #F38630;
margin: 0 1em;
padding: 0.25em 1em;
${props => props.primary && css`
border: solid 1px  white;
background: #FA6900;
color: white;
`}`;


export const HomeContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;

article {
background: white;
border: solid 1px white;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
padding: 50px 25px;
}
`
export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align:center;
`
export const SubmitBtn = styled.button
`

`


export const Main = styled.div`
background-color: #E0E4CC;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align:center;
margin: -10px;

@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
h1 {
  font-family: 'Solway', serif;
}
h2 {
  font-family: 'Solway'; 
  font-size: 20px;
}
p {
  font-family: 'Open Sans', sans-serif;
}
`


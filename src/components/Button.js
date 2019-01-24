import styled from 'styled-components';



export const ButtonContainer = styled.button
`text-transform: capitalize;
 font-size:1.9rem;
 background: black;
 border: 0.05rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius: 0.5rem;
border-color: ${props =>
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${prop => (prop.cart ? "var(--mainYellow)": "var(--lightBlue)")} ;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background: ${prop =>
    prop.cart ? "var(--mainBlue)": "var(--mainBlue)"};
  color:var(--mainYellow);
}
&:focus{
  outline: none;
}`
;

import styled from "@emotion/styled"

export const TitleText = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-weight: ${({ fontWeight }) => fontWeight || "600"};
font-size: ${({ fontSize }) => fontSize || "18px"};
margin: 0;
width:${({ width }) => width};
color:${({ color }) => color || "#00000"};
margin-top:${({ margin }) => margin}rem;
margin-bottom:${({ marginBottom }) => marginBottom};
line-height:${({ lineHeight }) => lineHeight};
text-align:${({ textAlign }) => textAlign};
padding:${({ padding }) => padding};
margin:${({ margins }) => margins};

 `
 export const TitleTexts = styled(TitleText)`
 &:hover {
  color: #108a00 ;
  cursor: pointer;

`
export const Labels = styled.label`
  font-family: 'Inter';
  font-style: normal;
   font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color:${({ color }) => color || "#001e00"};
  margin-right:${({ margin }) => margin};
  font-size:${({ fontSize }) => fontSize || "16px"};
  border-bottom:${({ border }) => border};
  padding:${({ padding }) => padding};
  margin:${({ margins }) => margins};
`
export const Span = styled.span`
  font-family: 'Inter';
  font-style: normal;
  color:${({ color }) => color || "#001e00"};
  margin-right:${({ margin }) => margin};
  font-size:${({ fontSize }) => fontSize || "13px"};
  border-bottom:${({ border }) => border};
  padding:${({ padding }) => padding};
  margin:${({ margins }) => margins};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display:flex;
  line-height:${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  word-break: break-all;

`
export const InputField = styled.input`
background:${({ background }) => background || "#FFFFFF"};  
border-style: solid;
border-width: ${({ borders }) => borders || "2px"};
border-color:${({ border }) => border || "#bababaa0"} ;
border-radius:${({ borderRadius }) => borderRadius || "6px"};
padding:${({ padding }) => padding || "1rem"};
width:${({ width }) => width || "90%"};
outline: none;
margin-right:${({ marginRight }) => marginRight};
margin:${({ margin }) => margin || ".6rem auto .7rem auto"};
text-align: ${({ textAlign }) => textAlign};
`
export const Form = styled.form`
box-shadow:${({ shadow }) => shadow || "  0px 3px 10px rgba(32, 32, 32, 0.1)"};
padding:${({ padding }) => padding || "2rem"};
background:${({ background }) => background || "#fff"};
border:${({ border }) => border || "1px solid #beccbe"};
border-radius: 20px;
margin:${({ margin }) => margin || "6rem auto auto auto"};
width:${({ width }) => width || "37%"};
min-height:${({ height }) => height || "300px"};

display:${({ display }) => display};
flex-wrap: wrap;
grid-column-gap:${({ column }) => column}rem;
@media (min-width:800px) and (max-width:1199px) {
    width:60%
  }
  @media (min-width:350px) and (max-width:809px) {
    width:80%
  }
  `
export const Card = styled(Form)`
`
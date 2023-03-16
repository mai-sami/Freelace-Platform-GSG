import { styled } from '@mui/material/styles';

export const Container = styled('div')`
width: 70%;
margin: auto;
`
export const Containers = styled('div')`
width: 95%;
margin: auto;
`
export const Box = styled('div')`
border:${({ border }) => border ||"1px solid #e4ebe4"};
 border-radius: 12px;
 width:${({ width }) => width || "75%"};
margin:${({ margin }) => margin|| "2rem auto auto"}; 
padding:${({ padding }) => padding};

`
export const Flex = styled('div')`
display:flex;
overflow: ${({ overflow }) => overflow};
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent};
margin-left: ${({ marginLeft }) => marginLeft}rem;
flex-direction:${({ flexDirection }) => flexDirection};
flex-wrap:${({ flexWrap }) => flexWrap};
width:${({ width }) => width};
margin: ${({ margin }) => margin};
padding: ${({ padding }) => padding};

border: ${({ border }) => border};
padding-left:${({ paddingLeft }) => paddingLeft};
flex-wrap:${({ flexWrap }) => flexWrap};

`
export const FlexResponsive = styled(Flex)`
align-items:${({ alignItems }) => alignItems || "baseline"};

  @media (min-width:400px) and (max-width:1199px) {
    flex-direction: column-reverse;
  }
`
export const FlexResp = styled(FlexResponsive)`
align-items:${({ alignItems }) => alignItems || "baseline"};

  @media (min-width:400px) and (max-width:1199px) {
    flex-direction: column;
  }
`
export const Column = styled('div')`
display: flex;
flex-direction: column;
 margin-left: ${({ marginLeft }) => marginLeft};
 align-items:${({ alignItems }) => alignItems};
 margin-right: ${({ marginRight }) => marginRight};
line-height: 2;
padding:${({ padding }) => padding};
align-items:${({ alignItems }) => alignItems};
border-bottom:${({ border }) => border};
width:${({ width }) => width};

`
export const CardsStyled = styled(Column)`
&:hover {
  background-color: #f2f7f2 ;
  cursor: pointer;

`   
import { styled } from '@mui/material/styles';

export const Container = styled('div')`
width: 70%;
margin: auto;
`
export const Box = styled('div')`
border: 1px solid #e4ebe4;
 margin-top:2rem;
border-radius: 12px;
`
export const Flex = styled('div')`
display:flex;
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent };
margin-left: ${({ marginLeft }) => marginLeft}rem;
flex-direction:${({ flexDirection }) => flexDirection};
flex-wrap:${({ flexWrap }) => flexWrap};
width:${({ width }) => width};
margin: ${({ margin }) => margin};
border: ${({ border }) => border};
padding-left:${({ paddingLeft }) => paddingLeft};

`
export const FlexResponsive=styled(Flex)`
align-items:${({ alignItems }) => alignItems || "baseline"};

  @media (min-width:400px) and (max-width:1199px) {
    flex-direction: column-reverse;
  }
 

`
export const Column = styled('div')`
display: flex;
flex-direction: column;
 margin-left: ${({ marginLeft }) => marginLeft};
 align-items:${({ alignItems }) => alignItems };

line-height: 2;

`
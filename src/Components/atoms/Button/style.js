import styled from "@emotion/styled";

export const CustomButton = styled('button')`
margin:1rem;
border-radius:10rem;
min-width: ${({ width }) => width || "180px"};
width: ${({ width }) => width};
height: ${({ height }) => height};
margin-top: ${({ marginTop }) => marginTop || ".6"}rem;
padding: ${({ padding }) => padding || ".8rem"};
font-size: ${({ fontSize }) => fontSize || "16"}px;
color:${({ color }) => color || "#fff"};
background: ${({ background }) => background || "#108a00"};
font-weight: ${({ fontWeight }) => fontWeight || "400"};
border:${({ border }) => border || "none"};
margin:${({ margin }) => margin};
position:${({ position }) => position};
top: ${({ top }) => top};
right: ${({ right }) => right};
cursor: pointer;
display: inline-flex;
justify-content: ${({ justifyContent }) => justifyContent||"center"};
align-items: center;
`
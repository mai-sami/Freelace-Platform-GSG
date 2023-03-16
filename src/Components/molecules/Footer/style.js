import styled from "@emotion/styled";

export const Footeer = styled('div')`
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent};
display:flex;
background:${({ background }) => background || "#001e00"};
margin: ${({ margin }) => margin || "4rem 0 2rem 0 "};
padding: ${({ padding }) => padding || "3.4rem 0 3.4rem 0 "};
border-radius: ${({ border }) => border || "12px"};
width:100%;
   `
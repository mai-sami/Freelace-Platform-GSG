import styled from "@emotion/styled";

export const CircelDiv = styled('div')`
    border-radius: 50%;
    border: 1px solid #e4ebe4;
    display:flex;
    align-items: center;
    justify-content: center;  
    margin: .5rem;
    color:${({ color }) => color || "#108a00"};
    width:${({ width }) => width ||"40px"};
    height:${({ height }) => height||"40px"};
`
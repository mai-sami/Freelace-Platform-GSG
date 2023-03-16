import styled from "@emotion/styled";
import { Badge } from "@mui/material";
export const Image = styled('img')`
border-radius: 50%;
width:${({ width }) => width||"80px"};
height:${({ height }) => height||"80px"};
 `
export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 55,
        border: `1px solid green`,
        padding: '0 4px',
        width: `20px`,
        height: `20px`,
        'border-radius': `50%`,

    }
}));
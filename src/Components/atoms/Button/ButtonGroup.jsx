 import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import Button from './Button';

function ButtonGroup() {
    return (
     <>
      <Button
                name={"Continue with Google"}
                color={"#fff"}
                background={"#4285f4"}
                fontWeight={"500"}
                fontSize={"17.5"}
                justifyContent={"space-between"}>
                <GoogleIcon style={{ fontSize: "25", paddingRight: ".5rem" }} />
            </Button>
            <Button
                name={"Continue with Apple"}
                color={"#222"}
                background={"#fff"}
                border={"1px solid #222"}
                fontWeight={"500"}
                fontSize={"17.5"}
            >
                <AppleIcon style={{ fontSize: "33", paddingRight: ".5rem" }} />
            </Button>
     </>   
    )
}

export default ButtonGroup

import { Backdrop } from '@mui/material'
import React, { useState } from 'react'

function CircularProgress() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
         <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="success" />
            </Backdrop>
        </>
    )
}

export default CircularProgress

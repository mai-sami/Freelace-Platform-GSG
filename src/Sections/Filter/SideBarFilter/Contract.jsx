import { Divider } from '@mui/material'
import React, { useState } from 'react'
import Dropdown from '../../../Components/atoms/DropdownComponent/Dropdown'

function Contract() {
    const [open, setOpen] = useState(false);
    const handelContract= () => {
      setOpen(!open)
  }
    return (
       <>
         <Dropdown  handelShow={handelContract}  show={open} text={"Contract-to-hire roles (52557)"} />
        <Divider />
       </> 
    )
}

export default Contract

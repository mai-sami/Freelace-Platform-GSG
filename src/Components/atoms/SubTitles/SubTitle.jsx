import React from 'react'
import { Span } from '../../../Style/GlobalElements'

function SubTitle({name,color,padding}) {
    return (
        <>
        <Span padding={padding} fontSize={"16px"} fontWeight={"500"} color={"#000"} >{name}</Span>
        </>
    )
}

export default SubTitle

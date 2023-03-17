import React from 'react'
import { Flex } from '../Style/Layout'
import notFound from '../assets/Group 491.png'
function NotFound() {
    return (
        <>
        
        <Flex margin={"6rem 0rem 0rem 0rem "} flexDirection={"column"}>
            <h1 style={{ margin: "3rem", color: "#888226" }}>
              Page Not Found <a href='/'>Please go just home </a>
            </h1>
            <img src={notFound} alt="notFound" />
          </Flex>
        </>

    )
}

export default NotFound

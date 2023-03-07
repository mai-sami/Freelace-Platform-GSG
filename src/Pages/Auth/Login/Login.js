import React from 'react'
import Button from '../../../Components/atoms/Button/Button'
import ButtonGroup from '../../../Components/atoms/Button/ButtonGroup'
import Dividers from '../../../Components/atoms/DividerComponent/Divider'
import { InputField } from '../../../Style/GlobalElements'
 function Login({button}) {
    return (
        <>
            <InputField placeholder='Enter Your username' />
            {button}
            <Dividers>or</Dividers>
            <ButtonGroup />
            <Dividers>Don't have an Upwork account? </Dividers>
            <Button
                width={"auto"}
                name={"Sigin Up"}
                color={"#108a00"}
                background={"#fff"}
                border={"2px solid #108a00"}
                padding={"1rem"}
                margin={"2rem"}
            />

        </>
    )
}

export default Login

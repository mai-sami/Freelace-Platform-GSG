import React, { useState } from 'react'
import Button from '../../../Components/atoms/Button/Button'
import ButtonGroup from '../../../Components/atoms/Button/ButtonGroup'
import Dividers from '../../../Components/atoms/DividerComponent/Divider'
import { Form, InputField, TitleText } from '../../../Style/GlobalElements'
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../Validation/Validation'
import { useForm } from 'react-hook-form'
import ErrorMessages from '../../../Components/molecules/ErrorMessages/ErrorMessages'
import { Column } from '../../../Style/Layout'
import EnterPassword from './EnterPassword'

function Login() {
    const [page, setPage] = useState(true);
    const { register, getValues, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const email = getValues("email")
    const onSubmit = (email) => {
        console.log(email);
        setPage((page) => page = false)
    }
    return (
        <>
            {page ? <Form onSubmit={handleSubmit(onSubmit)}>
                <Column>
                    <TitleText
                        fontWeight={"700"}
                        fontSize={"22px"}
                        lineHeight={3}
                        textAlign={"center"}
                    >
                        Log in to Upwork
                    </TitleText>
                    <InputField
                        margin={".6rem auto .2rem auto"}
                        {...register("email")}
                        name='email'
                        type={"email"}
                        border={errors?.email ? "red" : "#bababaa0"}
                        placeholder='Enter Your email' />
                    <ErrorMessages>
                        {errors.email && <ErrorMessages>{errors.email.message}</ErrorMessages>}
                    </ErrorMessages>
                    <Button
                        name={"Continue with Email"}
                        type={"submit"}
                    />
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
                </Column>
            </Form> : <EnterPassword email={email} />}


        </>
    )
}

export default Login

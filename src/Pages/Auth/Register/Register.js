import React, { useState } from 'react'
import Button from '../../../Components/atoms/Button/Button'
import Dividers from '../../../Components/atoms/DividerComponent/Divider'
import { Form, InputField, TitleText } from '../../../Style/GlobalElements'
import { Column } from '../../../Style/Layout'
import FormRegister from './FormRegister/FormRegister'
import JoinAs from './JoinAs/JoinAs'

function Register() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const FormTitle = ["Join as a client or freelancer", "Sign up to find work you love"];
    console.log(FormTitle[0]);
    const PageDisplay = () => {
        if (page === 0) {
            return (
                <JoinAs
                    button={
                        <Button
                            width={"auto"}
                            color={"#108a00"}
                            background={"#fff"}
                            border={"2px solid #108a00"}
                            padding={"1rem"}
                            margin={"2rem"}
                            onClick={() => {
                                if (page === FormTitle.length - 1) {
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitle.length ? "Log in" : "Create Acount"}
                        </Button>
                    }
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        } else {
            return <FormRegister formData={formData} setFormData={setFormData} />;
        }
    };
    return (
        <>
            <Form width={"50%"}>
                <Column>
                    <TitleText
                        fontWeight={"700"}
                        fontSize={"22px"}
                        lineHeight={3}
                        textAlign={"center"}
                    >
                        {FormTitle[page]}
                    </TitleText>
                    <> {PageDisplay()} </>
                </Column>
            </Form>
        </>
    )
}

export default Register

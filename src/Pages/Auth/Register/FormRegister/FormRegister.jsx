import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../../../../Components/atoms/Button/Button";
import ButtonGroup from "../../../../Components/atoms/Button/ButtonGroup";
import CheckBoxs from "../../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import Dividers from "../../../../Components/atoms/DividerComponent/Divider";
import AutocompleteAsync from "../../../../Components/molecules/Autocomplete/AutocompleteAsync";
import ErrorMessages from "../../../../Components/molecules/ErrorMessages/ErrorMessages";
 import UseAuth from "../../../../Hooks/Auth/useAuth";
import { City } from "../../../../Mock/StaticData";
import {
  Form,
  InputField,
  TitleText,
  Span,
} from "../../../../Style/GlobalElements";
import { Flex, Column } from "../../../../Style/Layout";
import { registerSchema } from "../../Validation/Validation";

function FormRegister({ checks }) {
  const [selectedOptions, setSelectedOptions] = useState(null);
  console.log(selectedOptions);
  const navigate = useNavigate();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const handleChange = (event, value) => {
    setSelectedOptions(value);
  };
  const { RegisterAction, isLoading } = UseAuth();
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    const name = getValues("first_name");
    const email = getValues("email");
    const password = getValues("password");
    const formData = {
      name,
      email,
      password,
    };
    RegisterAction(formData);
    navigate("/login");
    setOpen(!open);
  };

  return (
    <>
      <ToastContainer />
      <Form
        margin={"3rem auto auto auto"}
        width={"42%"}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isLoading ? (
        <Flex margin={"5rem"} justifyContent="center">
        <CircularProgress color="success" />
      </Flex>
        ) : (
          <Column>
            <TitleText
              fontWeight={"700"}
              fontSize={"22px"}
              lineHeight={3}
              textAlign={"center"}
            >
              Sign up to find work you love
            </TitleText>
            <ButtonGroup />
            <Dividers>or</Dividers>
            <Column>
              <InputField
                name="first_name"
                {...register("first_name")}
                placeholder="First name"
                border={errors?.password ? "red" : "#bababaa0"}
              />
              <ErrorMessages>
                {errors.first_name && (
                  <ErrorMessages>{errors.first_name.message}</ErrorMessages>
                )}
              </ErrorMessages>

              <InputField
                {...register("last_name")}
                name="last_name"
                placeholder="Last name"
                border={errors?.password ? "red" : "#bababaa0"}
              />
              <ErrorMessages>
                {errors.last_name && (
                  <ErrorMessages>{errors.last_name.message}</ErrorMessages>
                )}
              </ErrorMessages>
            </Column>
            <InputField
              width={"92%"}
              {...register("email")}
              type={"email"}
              name={"email"}
              placeholder="email"
              border={errors?.email ? "red" : "#bababaa0"}
            />
            <ErrorMessages>
              {errors.email && (
                <ErrorMessages>{errors.email.message}</ErrorMessages>
              )}
            </ErrorMessages>
            <InputField
              width={"92%"}
              {...register("password")}
              type={"password"}
              name={"password"}
              placeholder="Password"
              border={errors?.password ? "red" : "#bababaa0"}
            />
            <ErrorMessages>
              {errors.password && (
                <ErrorMessages>{errors.password.message}</ErrorMessages>
              )}
            </ErrorMessages>
            <AutocompleteAsync
              name={"mySelect"}
              register={register}
              onChange={handleChange}
              width={"99%"}
              data={City}
            />
            <CheckBoxs
              fontSize={"13px"}
              checked={true}
              fontWeight={"400"}
              text="Send me helpful emails to find rewarding work and job leads."
            />
            <CheckBoxs
              fontSize={"13px"}
              fontWeight={"600"}
              colors={"#108a00"}
              text="Yes, I understand and agree to the ."
              names={"Upwork Terms of Service"}
              checked={true}
            />
            <Button name={"Create my account"} />
            <Flex justifyContent={"center"}>
              <Span fontWeight={"400"} fontSize={"14px"}>
                Here to hire talent?{" "}
              </Span>
              <Span color={"#108a00"} fontWeight={"500"} fontSize={"14px"}>
                Join as a client
              </Span>
            </Flex>
          </Column>
        )}
      </Form>
    </>
  );
}

export default FormRegister;

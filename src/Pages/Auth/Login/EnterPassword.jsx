import React from "react";
import Button from "../../../Components/atoms/Button/Button";
import CheckBoxs from "../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import {
  Form,
  InputField,
  Span,
  TitleText,
} from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordSchema } from "../Validation/Validation";
import { useForm } from "react-hook-form";
import ErrorMessages from "../../../Components/molecules/ErrorMessages/ErrorMessages";
import { ToastContainer } from "react-toastify";
import UseAuth from "../../../Hooks/Auth/useAuth";
import { CircularProgress } from "@mui/material";
 
function EnterPassword({ email }) {
  const { loginAction, isLoading } = UseAuth();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordSchema),
  });
  const onSubmit = () => {
    const password = getValues("password");
    const formdata = { email, password };
    loginAction(formdata);
  };
  return (
    <>
      <ToastContainer />
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Flex margin={"5rem"} justifyContent="center">
              <CircularProgress color="success" />
            </Flex>
          ) : (
            <>
              <TitleText
                fontWeight={"700"}
                fontSize={"22px"}
                lineHeight={3}
                textAlign={"center"}
              >
                Welcome
              </TitleText>
              <Column>
                <Span justifyContent={"center"}>{email}</Span>
                <InputField
                  {...register("password")}
                  name="password"
                  type={"password"}
                  placeholder="Enter Your password"
                  border={errors?.password ? "red" : "#bababaa0"}
                />
                <ErrorMessages>
                  {errors.password && (
                    <ErrorMessages>{errors.password.message}</ErrorMessages>
                  )}
                </ErrorMessages>
                <Button>{"Log in"}</Button>
                <Flex justifyContent={"space-between"}>
                  <CheckBoxs
                    fontWeight={"400"}
                    fontSize={"14px"}
                    text={"Keep me logged in"}
                  />

                  <Span color={"#108a00"} fontWeight={"600"} fontSize={"14px"}>
                    Forget Password
                  </Span>
                </Flex>
                <Span
                  lineHeight={3}
                  justifyContent={"center"}
                  fontWeight={"600"}
                  fontSize={"19"}
                  color={"#108a00"}
                >
                  Not You ?
                </Span>
              </Column>
            </>
          )}
        </Form>
      </>
    </>
  );
}

export default EnterPassword;

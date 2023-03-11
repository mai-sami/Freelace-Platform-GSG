import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser, LoginActions } from "../../../Redux/Auth/authActions";
import { toast, ToastContainer } from "react-toastify";

function EnterPassword({ email }) {
  const dispatch = useDispatch();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordSchema),
  });
  useEffect(() => {
    dispatch(GetAllUser());
  }, [dispatch]);
  const { data, allUsers } = useSelector((state) => state.auth);
  const onSubmit = () => {
    const password = getValues("password");
    console.log(allUsers,"mais")
    console.log(allUsers.filter((item) => item.email === email))
    //    if (index !== -1) {
    //     toast.error("البريد الالكتروني أو كلمة المرور خاطئة", {
    //       icon: "😔",
    //       disableTimeOut: false,
    //       titleClass: "toaster_title",
    //       messageClass: "toaster_messge",
    //       timeOut: 5000,
    //       closeButton: true,
    //     });
    // }
    //  else {
    //   dispatch(LoginActions({ email, password }));
    // }
  };
  return (
    <>
      <ToastContainer />

      <Form onSubmit={handleSubmit(onSubmit)}>
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
      </Form>
    </>
  );
}

export default EnterPassword;

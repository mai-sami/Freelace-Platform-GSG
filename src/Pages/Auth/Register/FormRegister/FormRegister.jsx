import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../../../Components/atoms/Button/Button";
import ButtonGroup from "../../../../Components/atoms/Button/ButtonGroup";
import CheckBoxs from "../../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import Dividers from "../../../../Components/atoms/DividerComponent/Divider";
import AutocompleteAsync from "../../../../Components/molecules/Autocomplete/AutocompleteAsync";
import ErrorMessages from "../../../../Components/molecules/ErrorMessages/ErrorMessages";
import { City } from "../../../../Mock/StaticData";
import { RegisterActions } from "../../../../Redux/Auth/authActions";
import {Form,InputField,TitleText,Span,} from "../../../../Style/GlobalElements";
import { Flex, Column } from "../../../../Style/Layout";
import { registerSchema } from "../../Validation/Validation";

function FormRegister({ checks }) {
  const [selectedOptions, setSelectedOptions] = useState(null);
  console.log(checks);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
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
  const onSubmit = () => {
    const first_name = getValues("first_name");
    const last_name = getValues("last_name");
    const email = getValues("email");
    const password = getValues("password");
    let index = users.findIndex((item) => item.email === email);
    console.log(users, "usersusersusers");
    if (index !== -1) {
      toast.error("تم استخدام البريد الالكتروني حاول مرة أخرى", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    }
    // console.log({ first_name, last_name, password, selectedOptions ,checks})
    else {
      dispatch(
        RegisterActions({
          first_name,
          last_name,
          email,
          password,
          selectedOptions,
          checks,
        })
      );
    }
    navigate("/login");
  };
  return (
    <>
      <ToastContainer />
      <Form
        margin={"3rem auto auto auto"}
        width={"42%"}
        onSubmit={handleSubmit(onSubmit)}
      >
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
      </Form>
    </>
  );
}

export default FormRegister;

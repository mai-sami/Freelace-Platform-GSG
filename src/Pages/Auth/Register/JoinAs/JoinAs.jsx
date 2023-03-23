import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../Components/atoms/Button/Button";
import CheckBoxs from "../../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import { Card, Form, Span, TitleText } from "../../../../Style/GlobalElements";
import { Column, Flex } from "../../../../Style/Layout";
import { ImageChechbox, imageSecand } from "../../../../utils/Images";
import FormRegister from "../FormRegister/FormRegister";
import "../../../../index.css";
function JoinAs() {
  const [checks, setChecks] = useState("");
  const [page, setPage] = useState(true);
  const handelChecked = (e) => {
    const checksFreelance = e.target.value;
    const checkClient = e.target.value;
    console.log("checkbox checked:", checksFreelance, checkClient);
  };

  const [disabled, setDisabled] = useState(true);
  const onSubmit = (e) => {
    const formData = { checks };
    console.log(formData, "formData");
    setPage((page) => (page = false));
  };
  return (
    <>
      {page ? (
        <Form onSubmit={onSubmit} width={"50%"}>
          <Column>
            <TitleText
              fontWeight={"700"}
              fontSize={"22px"}
              lineHeight={4}
              textAlign={"center"}
            >
              Join as a client or freelancer
            </TitleText>
            <Flex margin={"1.3rem"}>
              <Card height={"44px"} margin={"1rem"} width={"50%"}>
                <Flex justifyContent={"space-between"}>
                  {ImageChechbox}
                  <CheckBoxs
                    onClick={handelChecked}
                    value={"client"}
                    name={"client"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    checked={checks === "client"}
                    onChange={() =>
                      setChecks("client") &
                      setDisabled((disabled) => (disabled = false))
                    }
                  />
                </Flex>
                <TitleText>I’m a freelancer, looking for work</TitleText>
              </Card>
              <Card height={"44px"} margin={"1rem"} width={"50%"}>
                <Flex justifyContent={"space-between"}>
                  {imageSecand}
                  <CheckBoxs
                    onClick={handelChecked}
                    value={"freelancer"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    checked={checks === "freelancer"}
                    onChange={() =>
                      setChecks("freelancer") &
                      setDisabled((disabled) => (disabled = false))
                    }
                  />
                </Flex>
                <TitleText>I’m a client, hiring for a project</TitleText>
              </Card>
            </Flex>
            <Button
              disabled={disabled}
              color={disabled ? "#a8aca8" : ""}
              background={disabled ? "#fff" : "#108a00"}
              border={disabled ? "1px solid #a8aca8" : ""}
              margin={"1rem"}
              name={"Create account"}
            />

            <Flex justifyContent={"center"}>
              <Span fontWeight={"400"} fontSize={"14px"}>
                Already have an account?{" "}
              </Span>
              <Link to={"/login"}>
                <Span color={"#108a00"} fontWeight={"500"} fontSize={"14px"}>
                  Log In
                </Span>
              </Link>
            </Flex>
          </Column>
        </Form>
      ) : (
        <FormRegister checks={checks} />
      )}
    </>
  );
}

export default JoinAs;

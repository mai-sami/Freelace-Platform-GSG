import React, { useState } from "react";
import Button from "../../../Components/atoms/Button/Button";
import Dividers from "../../../Components/atoms/DividerComponent/Divider";
import { Form, TitleText } from "../../../Style/GlobalElements";
import { Column } from "../../../Style/Layout";
import EnterPassword from "./EnterPassword";
import Login from "./Login";

function Index({ button }) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const FormTitle = ["Log in to Upwork", "Welcome"];
  console.log(FormTitle[0]);
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Login
          button={
            <Button
              onClick={() => {
                if (page === FormTitle.length - 1) {
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitle.length ? "Log in" : "Continue with Email"}
            </Button>
          }
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else {
      return <EnterPassword formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <Form>
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
  );
}

export default Index;

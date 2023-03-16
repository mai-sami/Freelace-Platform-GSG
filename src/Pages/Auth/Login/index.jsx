import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Components/atoms/Button/Button";
import { Form, TitleText } from "../../../Style/GlobalElements";
import { Column } from "../../../Style/Layout";
import EnterPassword from "./EnterPassword";
import Login from "./Login";

function Index({ button }) {
  const [page, setPage] = useState(0);
  const onSubmit = (data) => console.log(data);
  const FormTitle = ["Log in to Upwork", "Welcome"];
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Login
          button={
            <Button
              onClick={() => {
                if (page === FormTitle.length - 1) {
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitle.length ? "Log in" : "Continue with Email"}
            </Button>
          }
        />
      );
    } else {
      return <EnterPassword />;
    }
  };
 
}
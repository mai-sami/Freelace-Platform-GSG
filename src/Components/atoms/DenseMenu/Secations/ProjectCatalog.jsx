import React from "react";
import { Span, TitleText } from "../../../../Style/GlobalElements";
import { Column, Flex } from "../../../../Style/Layout";
import Button from "../../Button/Button";

function ProjectCatalog() {
  return (
    <Column>
      <Flex justifyContent={"space-between"}>
        <TitleText>Your Project Catalog</TitleText>
        <Button
          border={"2px solid #108a00"}
          background={"#fff"}
          color={"#108a00"}
          fontWeight={"600"}
          name={"Mange Projects"}
        />
      </Flex>
      <Column>
        <Span>
          Projects are a new way to earn on Upwork that helps you do more of the
        </Span>
        <Span>
          work you love to do. Create project offerings that highlight your
        </Span>
        <Span>strengths and attract more clients.</Span>
      </Column>
    </Column>
  );
}

export default ProjectCatalog;

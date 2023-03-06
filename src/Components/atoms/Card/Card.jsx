import React from "react";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import { Image } from "../../molecules/Logo/style";

const dataImage = [];
function Card() {
  return (
    <Flex>
        <Column>
        <Image src={"تا"} alt="portfolio" />
      <Span></Span>
        </Column>
    </Flex>
  );
}

export default Card;

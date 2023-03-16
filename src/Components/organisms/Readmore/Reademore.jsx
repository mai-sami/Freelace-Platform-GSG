import React, { useState } from "react";
import { Span } from "../../../Style/GlobalElements";
import Keywords from "react-keywords";
import { Flex } from "../../../Style/Layout";

function Reademore({ children, ValueSearch }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const text = children;
  return (
    <Flex  flexWrap={"wrap"} fontSize={"14px"}>
      <div>
        <Keywords value={ValueSearch}>
          {isReadMore ? text?.slice(0, 250) : text}
        </Keywords>
        <Span
          lineHeight={"3"}
          color={"#108a00"}
          fontWeight={"600"}
          onClick={toggleReadMore}
         >
          {isReadMore ? "Read more" : " show less"}
        </Span>
      </div>
      
    </Flex>
  );
}

export default Reademore;

import React, { useState } from "react";
import { Span } from "../../Style/GlobalElements";

function Reademore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const text = children;
  return (
    <Span fontSize={"14px"}>
      <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <Span  lineHeight={"3"} color={"#108a00"} fontWeight={"600"} onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "Read more" : " show less"}
        </Span>
      </p>
    </Span>
  );
}

export default Reademore;

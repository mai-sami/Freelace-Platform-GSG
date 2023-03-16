import React from "react";
import { Span } from "../../../Style/GlobalElements";
import { Flex } from "../../../Style/Layout";
import close from "../../../assets/close.png";
import opens from "../../../assets/arrows.png";
import CheckBoxUseMap from "../CheckBoxComponents/CheckBoxUseMap";

function Dropdown({ show, text, handelShow,data ,children,onChange,onClicks}) {
  return (
    <>
      <Flex margin={"1rem"} justifyContent={"space-between"}>
        <Span fontWeight={"600"} color="#001E00" fontSize={"15px"}>
          {text}
        </Span>
        {show ? (
          <img src={opens} alt="open" onClick={handelShow} />
        ) : (
          <img src={close} alt="close" onClick={handelShow} />
        )}
      </Flex>
      {show ? (
        <Flex
          alignItems={"left"}
          justifyContent={"left"}
          flexDirection={"column"}
        >
          <CheckBoxUseMap onClick={onClicks} onChange={onChange} data={data} />
          {children}
         </Flex>
      ) : (
        ""
      )}
    </>
  );
}

export default Dropdown;

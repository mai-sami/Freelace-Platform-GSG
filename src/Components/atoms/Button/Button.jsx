import React from "react";
import { CustomButton } from "./style";

function Button({
  fontWeight,
  onClick,
  children,
  padding,
  border,
  name,
  margin,
  width,
  height,
  background,
  color,
  fontSize,
}) {
  return (
    <>
      <CustomButton
        border={border}
        color={color}
        margin={margin}
        width={width}
        height={height}
        padding={padding}
        background={background}
        fontSize={fontSize}
        onClick={onClick}
        fontWeight={fontWeight}
      >
        {children}
        {name}
      </CustomButton>
    </>
  );
}

export default Button;

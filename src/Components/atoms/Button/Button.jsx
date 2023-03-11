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
  type,
  disabled
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
        disabled={disabled}
        type={type}
      >
        {children}
        {name}
      </CustomButton>
    </>
  );
}

export default Button;

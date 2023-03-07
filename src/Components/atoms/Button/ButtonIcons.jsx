import * as React from "react";
import Stack from "@mui/material/Stack";
import { CoustomButton } from "./ButtonIconStyle";
 export default function ButtonIcons({
  icons,
  fontWeight,
  onClick,
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
    <CoustomButton
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
      startIcon={icons}
    >
      {name}
    </CoustomButton>
  );
}

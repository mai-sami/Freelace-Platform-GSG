import React from "react";
import IconsFlex from "../../IconsFlexComponent/IconsFlex";
import { CircelDiv } from "../../IconsFlexComponent/style";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Flex } from "../../../../Style/Layout";
 function Portfolio() {
  const count = 3;
  return (
    <>
      <Flex>
        <IconsFlex
          name={`Portfolio (${count})`}
          icons={
            <CircelDiv>
              <EditIcon />
            </CircelDiv>
          }
        >
          <AddIcon />
        </IconsFlex>
        <CircelDiv>
          <EditIcon />
        </CircelDiv>
      </Flex>
     </>
  );
}

export default Portfolio;

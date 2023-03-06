import React, { useState } from "react";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import AddIcon from "@mui/icons-material/Add";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { Column } from "../../../Style/Layout";
import { InputField, Span } from "../../../Style/GlobalElements";
import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import { dataVedio, Degree } from "../../../Mock/StaticData";

function VideoIntroduction() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <IconsFlex name={"Video introduction"}>
          <AddIcon onClick={handleClickOpen} open={open} />
          <CustomizedDialogs
            open={open}
            handleClose={handleClose}
            title={"Add video introduction"}
          >
            <Column>
              <Column>
                <Span fontWeight={"600"} fontSize={"15"}>
                  Link to your YouTube video
                </Span>
                <InputField
                  margin={"0 0 .4rem 0"}
                  padding={"1rem"}
                  placeholder="Ex: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </Column>
              <Span
                lineHeight={3}
                fontWeight={"600"}
                fontSize={"17"}
                color={"#108a00"}
              >
                Does your video meet Upwork's guidelines?
              </Span>
              <Span fontWeight={"600"} fontSize={"15"}>
                What type of video is this?
              </Span>
              <AutocompleteAsync width={"600px"} data={dataVedio} />
            </Column>
          </CustomizedDialogs>
        </IconsFlex>
      </>
    </>
  );
}

export default VideoIntroduction;

import React, { useEffect, useState } from "react";
import IconsFlex from "../../IconsFlexComponent/IconsFlex";
import AddIcon from "@mui/icons-material/Add";
import { Column, Flex } from "../../../../Style/Layout";
import { useDispatch, useSelector } from "react-redux";
import ProfileImages from "../../../../Sections/Profiles/ProfileImages";
import { GetProfileImages } from "../../../../Redux/Prifiles/profileActions";
function Portfolio() {
  const [open, setOpen] = useState(false);
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const { Images } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(GetProfileImages());
  }, []);
  return (
    <Column>
      <Flex>
        <IconsFlex name={`Portfolio (${Images?.length})`}>
          <AddIcon onClick={handleClickOpen} />
        </IconsFlex>
      </Flex>
      {data?.map((item) => (
        <div>
          <ProfileImages
            images={item.images}
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
          />
        </div>
      ))}
    </Column>
  );
}

export default Portfolio;

import React, { useEffect } from "react";
 import { Column, Flex } from "../../Style/Layout";
import { Labels, Span} from "../../Style/GlobalElements";
import Logo from "../../Components/molecules/Logo/Logo";
import Button from "../../Components/atoms/Button/Button";
 import { Times } from "../../utils/helper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
  import { useDispatch, useSelector } from "react-redux";
import { GetUserData } from "../../Redux/Prifiles/profileActions";
import Availability from "../Dashboard/SideBard/Availability";
import Title from "../../Components/atoms/Titles/Title";
function Introduction() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData());
  }, [dispatch]);
  const { data } = useSelector((state) => state.profile);
  return (
    <>
      {data.map((item) => (
        <Flex justifyContent="space-between">
          <Flex alignItems={"left"}>
            <Logo />
            <Column marginLeft={"1.3rem"}>
            <Title name={data[0]?.first_name}/>
              <Span alignItems="center">
                <LocationOnIcon style={{ fontSize: "16", color: "#5e6d55" }} />
                {item.city} Territories – {Times} local time
              </Span>
              <Labels>
                <Flex alignItems={"center"}>
                  <Availability />
                </Flex>
              </Labels>
            </Column>
          </Flex>
          <Flex>
            <Button
              name={"See Public View"}
              color={"#108a00"}
              background={"#fff"}
              border={"2px solid #108a00"}
            />
            <Button name={"Profile Settings"} />
          </Flex>
        </Flex>
      ))}
    </>
  );
}
export default Introduction;

import React, {useState } from "react";
import { Span, TitleTexts } from "../../../Style/GlobalElements";
import { CardsStyled, Flex } from "../../../Style/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CircelDiv } from "../../atoms/IconsFlexComponent/style";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Keywords from "react-keywords";
import Chips from "../../atoms/ChipComponents/Chip";
import { useDispatch, useSelector } from "react-redux";
import { FavouritJobs } from "../../../Redux/Favourit/favouritAction";
import DrawerItemJobs from "../DrawerItemJobs/DrawerItemJobs";
import Reademore from "../Readmore/Reademore";
function Cards({ dataCard, ValueSearch }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { Jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const goToFavourit = (id) => {
    const data = Jobs.filter((element) => element.id === id);
    console.log(id, data);
    dispatch(FavouritJobs([id, {data} ]));
  };
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open, id) => (event) => {
    console.log(id);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, id) => {
    console.log(id);
    return (
      <Box>
        <List style={{ width: "1000px" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <DrawerItemJobs id={id} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  };
  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <div key={anchor}>
            {dataCard?.map((item) => (
              <>
                <CardsStyled key={item.id}> 
                    {anchor}
                    <Flex justifyContent={"space-between"}>
                      <TitleTexts>
                        <Keywords value={ValueSearch}>{item.title}</Keywords>
                      </TitleTexts>
                      <Flex>
                        <CircelDiv>
                          <Checkbox
                            color="success"
                            {...label}
                            icon={<ThumbDownIcon color="success" />}
                            checkedIcon={<ThumbDownIcon color="green" />}
                          />
                        </CircelDiv>
                        <CircelDiv>
                          <Checkbox
                            onClick={(id) => goToFavourit(item.id)}
                            value={item.id}
                            color="success"
                            {...label}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        </CircelDiv>
                      </Flex>
                    </Flex>
                  <div onClick={toggleDrawer(anchor, true, item.id)}>
                    <Flex>
                      <Span color="#5e6d55" fontWeight={"500"}>
                        {item.typePrice}{" "}
                      </Span>
                      <Span>Est. Budget: </Span>
                      <Span>{item.price}$</Span>
                      <Span>Posted {item.time} houer</Span>
                    </Flex>

                    <Reademore ValueSearch={ValueSearch}>
                      {item.dicription}
                    </Reademore>
                    <Chips ValueSearch={ValueSearch} Skills={item.skills} />
                    <Span color="#5e6d55">
                      {" "}
                      Propsals
                      {item.propsals}
                    </Span>

                    <Flex>
                      <Span
                        margins={".4rem .4rem .4rem 0 "}
                        alignItems={"center"}
                      >
                        {item.payment ? (
                          <Span
                            alignItems={"center"}
                            color={"#5e6d55"}
                            fontSize={"13px"}
                            fontWeight={"600"}
                          >
                            <CreditScoreIcon
                              style={{
                                color: "blue",
                                fontSize: "18px",
                                marginRight: ".3rem",
                              }}
                            />
                            Payment verified
                          </Span>
                        ) : (
                          <Span
                            alignItems={"center"}
                            color={"#5e6d55"}
                            fontSize={"13px"}
                            fontWeight={"600"}
                          >
                            <CreditCardOffIcon
                              style={{
                                color: "#5e6d55",
                                fontSize: "18px",
                                marginRight: ".3rem",
                              }}
                            />{" "}
                            Payment unverified
                          </Span>
                        )}{" "}
                      </Span>
                      <Rating value={item.reating} readOnly size="small" />
                      <Span margins={".4rem"}>
                        {item.payment === false
                          ? "$0 spent"
                          : `$${item.spent} spent`}
                      </Span>
                      <Flex margin={".3rem"}>
                        <LocationOnIcon
                          style={{ color: "#5e6d55", fontSize: "14px" }}
                        />
                        <Span>{item.city}</Span>
                      </Flex>
                    </Flex>
                    <Divider style={{ margin: "1rem 0 2rem 0" }} />
                  </div>
                </CardsStyled>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor, item.id)}
                </Drawer>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;

import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import { Divider } from "@mui/material";
import Keywords from "react-keywords";
import { useDispatch, useSelector } from "react-redux";
import {
  FavouritJobs,
  GetFavouritJobs,
} from "../../../../Redux/Favourit/favouritAction";
import { CardsStyled, Flex } from "../../../../Style/Layout";
import { Span, TitleTexts } from "../../../../Style/GlobalElements";
import { CircelDiv } from "../../../atoms/IconsFlexComponent/style";
 import Chips from "../../../atoms/ChipComponents/Chip";
import Reademore from "../../Readmore/Reademore";
function CardSaved({ ValueSearch }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { favourit } = useSelector((state) => state.favourit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFavouritJobs());
  }, []);

  return (
    <>
      {favourit?.map((item) => (
        <CardsStyled>
          <Flex justifyContent={"space-between"}>
            <TitleTexts>
              <Keywords value={ValueSearch}>{item.data.title}</Keywords>
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
                  value={item.id}
                  color="success"
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </CircelDiv>
            </Flex>
          </Flex>
          <Flex>
            <Span color="#5e6d55" fontWeight={"500"}>
              {item.data.typePrice}{" "}
            </Span>
            <Span>Est. Budget: </Span>
            <Span>{item.data.price}$</Span>
            <Span>Posted {item.data.time} houer</Span>
          </Flex>

          <Reademore ValueSearch={ValueSearch}>
            {item.data.dicription}
          </Reademore>
          <Chips ValueSearch={ValueSearch} Skills={item.data.skills} />
          <Span color="#5e6d55">
            {" "}
            Propsals
            {item.data.propsals}
          </Span>

          <Flex>
            <Span margins={".4rem .4rem .4rem 0 "} alignItems={"center"}>
              {item.data.payment ? (
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
            <Rating value={item.data.reating} readOnly size="small" />
            <Span margins={".4rem"}>
              {item.data.payment === false
                ? "$0 spent"
                : `$${item.data.spent} spent`}
            </Span>
            <Flex margin={".3rem"}>
              <LocationOnIcon style={{ color: "#5e6d55", fontSize: "14px" }} />
              <Span>{item.data.city}</Span>
            </Flex>
          </Flex>
          <Divider style={{ margin: "1rem 0 2rem 0" }} />
        </CardsStyled>
      ))}
    </>
  );
}

export default CardSaved;

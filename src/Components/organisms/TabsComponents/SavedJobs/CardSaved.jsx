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
  console.log(favourit,"favourit")
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFavouritJobs());
  }, [dispatch]);
  return (
    <>
      {favourit?.map((data) => (
        <>
     {data.data?.map((item) => (
       
       <CardsStyled key={item.id}>
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
            <Span margins={".4rem .4rem .4rem 0 "} alignItems={"center"}>
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
              <LocationOnIcon style={{ color: "#5e6d55", fontSize: "14px" }} />
              <Span>{item.city}</Span>
            </Flex>
          </Flex>
          <Divider style={{ margin: "1rem 0 2rem 0" }} />
        </CardsStyled>
              ))}

      </>
      ))}
    </>
  );
}

export default CardSaved;

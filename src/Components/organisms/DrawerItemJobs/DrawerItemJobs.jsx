import { Divider, Rating } from "@mui/material";
import React, { useEffect } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import UseApi from "../../../Hooks/Filter/useFilter";
import { Base_Url } from "../../../Config/api";
import { Box, Column, Flex, FlexResp } from "../../../Style/Layout";
import { Span, TitleText } from "../../../Style/GlobalElements";
import Chips from "../../atoms/ChipComponents/Chip";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";

function DrawerItemJobs({ id }) {
   const { job, GetJobItem } = UseApi();
  useEffect(() => {
    GetJobItem(`${Base_Url}jobs/${id}`);
  }, []);
  return (
    <Column>
      <>
        <Flex justifyContent={"space-between"}>
          <TitleText>Job details</TitleText>
          <Link target={"_blank"} to={`/job-details/${id}`}>
            <TitleText color="#108a00">Open in new Window</TitleText>
          </Link>
        </Flex>
        <Box>
          <FlexResp justifyContent={"space-between"}>
            <Column
              style={{
                width: "100%",
                border: "1px solid #bababaa0",
                borderTop: "none",
              }}
              padding="2rem"
            >
              <TitleText> {job.title}</TitleText>
              <Span
                fontSize="14px"
                fontWeight="500"
                color={"#108a00"}
                margins="2rem 0 0"
              >
                {job.categiory}
              </Span>
              <Span>Posted {job.timeposted} hours ago</Span>
              <Flex margin="1rem 0 1rem 0"> Worldwide</Flex>
              <Divider />
              <Span lineHeight="3" margins={"1.5rem 0 1.5rem 0"}>
                {job.dicription}
              </Span>
              <Divider />
              <Flex padding="1.4rem 0 1.4rem 0">
                <Column marginRight="4rem ">
                  <Span fontSize="15px" fontWeight="600">
                    ${job.price}
                  </Span>
                  <Span>{job.typePrice}</Span>
                </Column>
                <Column>
                  <Span fontSize="15px" fontWeight="600">
                    {job.levels}
                  </Span>
                  <Span>I am looking for a mix of experience and value</Span>
                </Column>
              </Flex>
              <Divider />
              <Flex padding="1.4rem 0 1.4rem 0">
                <Span fontSize="15px" margin={".4rem"} fontWeight="600">
                  Project Type:
                </Span>
                <Span fontSize="14px"> {job.type}</Span>
              </Flex>
              <Divider />
              <Column padding="1.4rem 0 1.4rem 0">
                <TitleText>Skills and Expertise</TitleText>
                <Flex padding="1.4rem 0 1.4rem 0">
                  <Column marginRight="6rem">
                    <Span>Full Stack Development Deliverables</Span>
                    <Span>
                      <Chips Skills={job.skillsCategiory} />
                    </Span>
                  </Column>
                  <Column>
                    <Span>Other</Span>
                    <Span>
                      {" "}
                      <Chips Skills={job.skills} />
                    </Span>
                  </Column>
                </Flex>
                <Divider />
                <Column padding="1.4rem 0 1.4rem 0">
                  <TitleText color="#108a00">Activity on this job</TitleText>
                  <Flex>
                    <Span margin=".3rem" fontSize="15px" lineHeight="3">
                      Proposals:
                    </Span>
                    <Span> {job.propsals}</Span>
                  </Flex>
                  <Flex>
                    <Span margin=".3rem" fontSize="15px" lineHeight="3">
                      Last viewed by client:{" "}
                    </Span>
                    <Span> 22 hours ago</Span>
                  </Flex>
                  <Flex>
                    <Span margin=".3rem" fontSize="15px" lineHeight="3">
                      Interviewing
                    </Span>
                    <Span>1</Span>
                  </Flex>
                  <Flex>
                    <Span margin=".3rem" fontSize="15px" lineHeight="3">
                      Invites sent:
                    </Span>
                    <Span>0</Span>
                  </Flex>
                  <Flex>
                    <Span margin=".3rem" fontSize="15px" lineHeight="3">
                      Unanswered invites:
                    </Span>
                    <Span>1</Span>
                  </Flex>
                </Column>
                <TitleText>
                  Upgrade your membership to see the bid range
                </TitleText>
              </Column>
            </Column>
            <Column style={{ width: "400px" }}>
              <Button name={"Apply Now"} />
              <Button
                name={"Saved Job"}
                color={"#108a00"}
                background={"#fff"}
                border={"2px solid #108a00"}
              />
              <Column padding="1.2rem">
                <Span lineHeight="3">Send a proposal for: 6 Connects</Span>
                <Span lineHeight="3">Available Connects: 112</Span>
                <Divider />
                <Span margins={"1rem .4rem 0rem 0 "}>About the client</Span>
                <Span margins={".4rem .4rem .4rem 0 "} alignItems={"center"}>
                  {job.payment ? (
                    <Span
                      alignItems={"center"}
                      color={"#5e6d55"}
                      fontSize={"16px"}
                      fontWeight={"600"}
                    >
                      <CreditScoreIcon
                        style={{
                          color: "green",
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
                <Span alignItems="center">
                  <Rating
                    style={{ color: "green" }}
                    value={job.reating}
                    readOnly
                    size="mduim"
                  />
                  5.00 of 1 review
                </Span>
                <Column padding="1rem 0 1rem 0">
                  <Span fontSize="16px" fontWeight="500">
                    Lebanon
                  </Span>
                  <Span>Saida 12:01 am</Span>
                </Column>
                <Column padding="1rem 0 1rem 0">
                  <Span fontSize="16px" fontWeight="500">
                    1 job posted
                  </Span>
                  <Span>100% hire rate, 1 open job</Span>
                </Column>
                <Column padding="1rem 0 .5rem 0">
                  <Span fontSize="16px" fontWeight="500">
                    $250 total spent
                  </Span>
                  <Span>1 hire, 0 active</Span>
                </Column>
                <Column padding="0rem 0 .5rem 0">
                  <Span>Member since May 19, 2015</Span>
                </Column>
                <Divider />
                <TitleText lineHeight="5">Job link</TitleText>
              </Column>
            </Column>
          </FlexResp>
        </Box>
      </>
    </Column>
  );
}

export default DrawerItemJobs;

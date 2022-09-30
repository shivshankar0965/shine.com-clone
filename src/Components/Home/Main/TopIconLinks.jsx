import React from "react";
import { GrNotes } from "react-icons/gr";
import { BsSignpost2 } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { Box, HStack, VStack } from "@chakra-ui/react";
const TopIconLinks = () => {
  const iconsList = [
    {
      title: "assesment",
      iconID: GrNotes,
      link: "https://www.shine.com/techassessments/",
      colorId: "#81E6D9",
    },
    {
      title: "career path",
      iconID: BsSignpost2,
      link: "https://www.shine.com/#",
      colorId: "#FEB2B2",
    },
    {
      title: "dreem job",
      iconID: ImOffice,
      link: "https://www.shine.com/new/job-search/",
      colorId: "#90CDF4",
    },
  ];
  return (
    <HStack>
      {iconsList.map((el, i) => {
        return (
          <VStack key={i}>
            let icon = el.iconID;
            <Box>icon()</Box>
          </VStack>
        );
      })}
    </HStack>
  );
};
export default TopIconLinks;

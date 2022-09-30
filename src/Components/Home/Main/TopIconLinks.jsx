import React from "react";
import { GrNotes } from "react-icons/gr";
import { BsSignpost2 } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { Box, Center, HStack, VStack, Text, Flex } from "@chakra-ui/react";
const TopIconLinks = () => {
  const iconsList = [
    {
      title: "assesment",
      iconID: GrNotes,
      link: "https://www.shine.com/techassessments/",
      colorId: "#81E6D9",
      iconColor: "#319795",
    },
    {
      title: "career path",
      iconID: BsSignpost2,
      link: "https://www.shine.com/#",
      colorId: "#FEB2B2",
      iconColor: "#D53F8C",
    },
    {
      title: "dreem job",
      iconID: ImOffice,
      link: "https://www.shine.com/new/job-search/",
      colorId: "#90CDF4",
      iconColor: "#319795",
    },
  ];

  return (
    <Center mt="40px">
      <HStack spacing={8}>
        {iconsList.map((el, i) => {
          const Icon = iconsList[i].iconID;
          return (
            <VStack
              cursor="pointer"
              key={i}
              onClick={() => {
                window.open(`${el.link}`, "_blank");
              }}
            >
              <Flex
                backgroundColor={el.colorId}
                borderRadius="50%"
                h={16}
                w={16}
                justify="center"
                align="center"
              >
                <Box fontSize="25px" color={el.iconColor} as="span">
                  <Icon />
                </Box>
              </Flex>
              <Text textTransform="capitalize">{el.title}</Text>
            </VStack>
          );
        })}
      </HStack>
    </Center>
  );
};
export default TopIconLinks;

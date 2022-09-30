import { HStack, Box, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export const Bottomnav = () => {
  const [isHovering, setisHovering] = useState(-1);
  const links = [
    { id: 0, title: "Home", subLinks: [] },
    { id: 1, title: "Jobs", subLinks: ["search", "job alerts"] },
    {
      id: 2,
      title: "jobs seeking assistance",
      subLinks: [
        "profile booster",
        "application highlighter",
        "resume writing",
        "view all",
      ],
    },
    {
      id: 3,
      title: "courses",
      subLinks: [
        "sales and marketing",
        "information and technology",
        "operation management",
        "human resources",
        "view all",
      ],
    },
    { id: 4, title: "career guidance", subLinks: [] },
    { id: 5, title: "blogs", subLinks: [] },
  ];

  return (
    <>
      <HStack>
        <HStack w="85%" mx="auto">
          {links.map((e) => {
            return (
              <Box
                fontSize={"sm"}
                fontWeight="semibold"
                key={e.id}
                cursor="pointer"
                py="3"
                pos="relative"
                onMouseEnter={() => setisHovering(e.id)}
                onMouseLeave={() => setisHovering(-1)}
              >
                <Text textTransform={"uppercase"} pos={"relative"} mr="4">
                  {e.title}

                  <Box
                    pos="absolute"
                    top="31px"
                    right="0"
                    display={isHovering === e.id ? "block" : "none"}
                    h={"2px"}
                    backgroundColor="purple.600"
                    width="100%"
                  ></Box>
                </Text>

                <VStack
                  display={isHovering === e.id ? "block" : "none"}
                  pos={"absolute"}
                  top="46px"
                  left="0"
                  shadow="md"
                  width="250px"
                  zIndex={5}
                  borderRadius="md"
                  backgroundColor="#fff"
                  py={e.subLinks.length === 0 ? "" : "2"}
                >
                  {e.subLinks?.map((elm, i) => {
                    return (
                      <Text
                        color="grey"
                        fontSize="sm"
                        px={e.subLinks.length === 0 ? "" : "6"}
                        py={e.subLinks.length === 0 ? "" : "2"}
                        _hover={{ color: "purple.500", borderLeft: "2px" }}
                        display={elm === undefined ? "none" : "block"}
                        textTransform={"capitalize"}
                        key={i}
                      >
                        {elm}
                      </Text>
                    );
                  })}
                </VStack>
              </Box>
            );
          })}
        </HStack>
      </HStack>
    </>
  );
};

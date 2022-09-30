import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Trending() {
  const trends = [
    "java",
    "android",
    "Accountant",
    "HR",
    "Business Development",
  ];
  return (
    <>
      <HStack mb="10px" fontSize="xs" w="85%" mx="auto">
        <Text ml={"110px"} fontWeight="semibold">
          Trending:
        </Text>
        {trends.map((e, index) => {
          return (
            <Text
              textTransform={"capitalize"}
              px={2}
              borderRight={index === trends.length - 1 ? "" : "1px"}
              borderColor={"purple.500"}
              color="purple.500"
              key={index}
            >
              {e}
            </Text>
          );
        })}
      </HStack>
    </>
  );
}

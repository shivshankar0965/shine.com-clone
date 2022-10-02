import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import { BsSearch, BsPersonPlus } from "react-icons/bs";
import React from "react";

const iconStyle = {
  fontSize: " 30px",
  marginRight: "10px",
};
export default function CraeteAndSearchCard() {
  return (
    <>
      <Center mt="10">
        <HStack spacing="10" fontWeight="semibold">
          <Flex
            cursor="pointer"
            _hover={{ color: "purple.500" }}
            p="10"
            shadow="xl"
            justify={"center"}
            align="center"
          >
            <BsSearch style={iconStyle} /> <Text>Search Your Dream Career</Text>
          </Flex>
          <Flex
            cursor="pointer"
            _hover={{ color: "purple.500" }}
            p="10"
            shadow="md"
            justify={"center"}
            align="center"
          >
            <BsPersonPlus style={iconStyle} /> <Text>Create Your Profile</Text>
          </Flex>
        </HStack>
      </Center>
    </>
  );
}

import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import { BsSearch, BsPersonPlus } from "react-icons/bs";
import React from "react";

const iconStyle = {
  fontSize: " 30px",
  marginRight: "10px",
};
const boxShadow = {
  boxShadow: "2px 2px 10px #555",
};
export default function CraeteAndSearchCard() {
  return (
    <>
      <Center mt="10">
        <HStack spacing="10" fontWeight="semibold">
          <Flex
            style={boxShadow}
            cursor="pointer"
            _hover={{ color: "purple.500" }}
            px="20"
            py="10"
            justify={"center"}
            align="center"
          >
            <BsSearch style={iconStyle} /> <Text>Search Your Dream Career</Text>
          </Flex>
          <Flex
            style={boxShadow}
            cursor="pointer"
            _hover={{ color: "purple.500" }}
            px="20"
            py="10"
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

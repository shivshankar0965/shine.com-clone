import {
  HStack,
  Image,
  Box,
  Input,
  Button,
  Spacer,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {
  IoNotificationsOutline,
  IoNotificationsOffOutline,
} from "react-icons/io5";
export const Middlenav = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <HStack>
        <HStack py={2} spacing={10} mx="auto" width="85%">
          <Box>
            <Image
              width="70px"
              src="https://www.shine.com/next/static/images/shine-logo.png"
              alt="shine-logo"
            />
          </Box>
          <Box shadow="md" borderRadius="4" display="flex" alignItems="center">
            <Input
              variant="unstyled"
              borderRightRadius="0"
              type="text"
              width={"md"}
              px="3"
              placeHolder="Job title, skills"
            />
            <Button
              _hover={{ color: "#fff" }}
              bg="purple.500"
              color="white"
              borderLeftRadius="0"
            >
              <BiSearch fontSize="1.4rem" />
            </Button>
          </Box>
          <Spacer />
          <HStack spacing={8}>
            <Button
              _hover={{ backgroundColor: "#8652ff", color: "#fff" }}
              colorScheme={"purple"}
              variant="outline"
              size="xs"
              px="5"
              py="3.5"
              fontSize={"md"}
            >
              Login
            </Button>
            <Button
              fontSize={"md"}
              px="5"
              py="3.5"
              colorScheme={"purple"}
              size="xs"
            >
              Register
            </Button>
            <Box
              pos={"relative"}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              cursor="pointer"
              fontSize={24}
              as="span"
            >
              <Box
                backgroundColor="purple.600"
                width="98%"
                display={isVisible ? "block" : "none"}
                height="2px"
                top="25px"
                right="0"
                pos="absolute"
              ></Box>
              <IoNotificationsOutline />
              <Box
                display={isVisible ? "block" : "none"}
                p="6"
                borderRadius="md"
                pos="absolute"
                top="27px"
                right="0"
                shadow="md"
                w={"400px"}
                h={"350px"}
                backgroundColor="white"
                zIndex={5}
              >
                <Heading as="h1" size="md">
                  Notification
                </Heading>
                <VStack mt={"100px"} fontSize={"20px"}>
                  <Box color={"green.300"} fontSize="60px" as={"span"}>
                    <IoNotificationsOffOutline />
                  </Box>
                  <Heading as={"h4"} size="md">
                    No Notification
                  </Heading>
                  <Text px="10" textAlign={"center"} fontSize={"12px"}>
                    We Will Notify You Once We Have Something For You
                  </Text>
                </VStack>
              </Box>
            </Box>
            <Box
              onClick={() =>
                window.open(
                  "https://learning.shine.com/cart/payment-summary",
                  "_blank"
                )
              }
              cursor="pointer"
              fontSize={24}
              as="span"
            >
              <BsCart2 />
            </Box>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

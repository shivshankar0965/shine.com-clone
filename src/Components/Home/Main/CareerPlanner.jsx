import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

export default function CareerPlanner() {
  return (
    <Stack mt={"10"} backgroundColor={"#f2f3f8"} py="10">
      <HStack w={"85%"} mx="auto">
        <Box>
          <Heading mb={"10"}>Explore Dream Career of Your Choice</Heading>
          <Button fontSize={"lg"} colorScheme={"orange"} px="10">
            Career Planner
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Image src="https://www.shine.com/next/static/images/explore-dream-career.png" />
        </Box>
      </HStack>
    </Stack>
  );
}

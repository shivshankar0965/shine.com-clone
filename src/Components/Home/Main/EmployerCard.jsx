import { Button, Center, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";

export default function EmployerCard() {
  return (
    <Stack mt="10" backgroundColor={"gray.100"} py="14">
      <Center>
        <HStack spacing={10}>
          <Heading>Are You an Employer?</Heading>
          <HStack spacing={4}>
            <Button px={16} colorScheme={"orange"}>
              Search Your Hire
            </Button>
            <Button px={16} colorScheme={"purple"}>
              Post a Job
            </Button>
          </HStack>
        </HStack>
      </Center>
    </Stack>
  );
}

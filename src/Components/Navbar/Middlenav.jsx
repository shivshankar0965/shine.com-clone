import { HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";

export const Middlenav = () => {
  return (
    <>
      <Stack>
        <HStack mx="auto" width="85%">
          <Image
            width="70px"
            src="https://www.shine.com/next/static/images/shine-logo.png"
            alt="shine-logo"
          />
        </HStack>
      </Stack>
    </>
  );
};

import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { Bottomnav } from "./Bottomnav";
import { Middlenav } from "./Middlenav";
import { Topnav } from "./Topnav";

export const Navbar = () => {
  return (
    <>
      <Stack zIndex={5} shadow="lg">
        <Topnav />
        <Middlenav />
        <Divider />
        <Bottomnav />
      </Stack>
    </>
  );
};

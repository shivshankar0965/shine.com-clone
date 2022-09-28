import React from "react";
import { Bottomnav } from "./Bottomnav";
import { Middlenav } from "./Middlenav";
import { Topnav } from "./Topnav";

export const Navbar = () => {
  return (
    <>
      <Topnav />
      <Middlenav />
      <Bottomnav />
    </>
  );
};

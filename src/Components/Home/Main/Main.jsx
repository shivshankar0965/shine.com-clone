import React from "react";
import { JobSlides } from "./JobSlides";
import SlideShow from "./SlideShow";
import TabFirst from "./TabFirst";
import TopIconLinks from "./TopIconLinks";

export default function Main() {
  return (
    <>
      <SlideShow />
      <TopIconLinks />
      <TabFirst />
      <JobSlides />
    </>
  );
}

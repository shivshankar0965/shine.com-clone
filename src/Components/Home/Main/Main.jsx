import React from "react";
import { JobSlides } from "./JobSlides";
import axios from "axios";
import SlideShow from "./SlideShow";
import TabFirst from "./TabFirst";
import TopIconLinks from "./TopIconLinks";
import { Center, Heading, Link } from "@chakra-ui/react";
import CraeteAndSearchCard from "./CraeteAndSearchCard";

export default function Main() {
  const [earlyApp, setEarlyapp] = React.useState([]);
  const [remoteJobs, setRemoteJobs] = React.useState([]);
  const [walkinJobs, setWalkinJobs] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://ecommercecrudoperation.herokuapp.com/earlyapplicants")
      .then((res) => {
        setEarlyapp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://ecommercecrudoperation.herokuapp.com/remotejobs")
      .then((res) => {
        setRemoteJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://ecommercecrudoperation.herokuapp.com/walkinjobs")
      .then((res) => {
        setWalkinJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SlideShow />
      <TopIconLinks />
      <TabFirst />
      <Center>
        <Heading as="h1" textTransform="capitalize" mt="10" size="xl">
          be an early applicant
        </Heading>
      </Center>
      <JobSlides data={earlyApp} />
      <Center>
        <Link
          fontWeight={"bold"}
          _hover={{ textDecor: "none" }}
          color="purple.500"
          textTransform="capitalize"
        >
          13841+ more jobs
        </Link>
      </Center>
      <Center>
        <Heading as="h1" textTransform="capitalize" mt="10" size="xl">
          remote jobs
        </Heading>
      </Center>
      <JobSlides data={remoteJobs} />
      <Center>
        <Link
          fontWeight={"bold"}
          _hover={{ textDecor: "none" }}
          color="purple.500"
          textTransform="capitalize"
        >
          795+ more jobs
        </Link>
      </Center>
      <Center>
        <Heading as="h1" textTransform="capitalize" mt="10" size="xl">
          Walkin Jobs
        </Heading>
      </Center>
      <JobSlides data={walkinJobs} />
      <Center>
        <Link
          fontWeight={"bold"}
          _hover={{ textDecor: "none" }}
          color="purple.500"
          textTransform="capitalize"
        >
          View All
        </Link>
      </Center>
      <CraeteAndSearchCard />
    </>
  );
}

import React from "react";
import { JobSlides } from "./JobSlides";
import axios from "axios";
import SlideShow from "./SlideShow";
import TabFirst from "./TabFirst";
import TopIconLinks from "./TopIconLinks";
import {
  Center,
  GridItem,
  Heading,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import CraeteAndSearchCard from "./CraeteAndSearchCard";
import EmployerCard from "./EmployerCard";
import { GrDocumentUser } from "react-icons/gr";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiUser2Line } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import CareerPlanner from "./CareerPlanner";
const srolesIcons = [
  {
    title: "Chief Technology Officer",
    icon: GrDocumentUser,
  },
  {
    title: "Data Science Head",
    icon: HiOutlinePresentationChartLine,
  },
  {
    title: "Chief Marketing Officer",
    icon: RiUser2Line,
  },
  {
    title: "Chief Product Officer",
    icon: FiUserCheck,
  },
];

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
      <EmployerCard />
      <Center>
        <Heading as="h1" textTransform="capitalize" mt="10" size="xl">
          Aspire to Senior Roles in Career
        </Heading>
      </Center>
      <SimpleGrid
        mx={"auto"}
        maxW={"60%"}
        gridTemplateColumns="repeat(2, 1fr)"
        gap={4}
      >
        {srolesIcons?.map((item, i) => {
          const Icon = srolesIcons[i].icon;
          return (
            <Popover>
              <PopoverTrigger>
                <GridItem
                  cursor={"pointer"}
                  px={8}
                  py={12}
                  key={i}
                  boxShadow={"xl"}
                >
                  <HStack spacing="4">
                    <Icon style={{ fontSize: "38px", color: "purple" }} />
                    <Text
                      color={"gray.600"}
                      fontWeight={"bold"}
                      fontSize={"xl"}
                    >
                      {item.title}
                    </Text>
                  </HStack>
                </GridItem>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontSize={"md"} color={"red.300"}>
                  Information!
                </PopoverHeader>
                <PopoverBody>
                  <VStack>
                    <Heading size={"md"}>Pardon the inconvenience.</Heading>
                    <Text>
                      This functionality currently works only in mobile view.
                      This would start working for desktop view shortly.
                    </Text>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          );
        })}
      </SimpleGrid>
      <Center mt="8">
        <Link
          fontSize={"sm"}
          fontWeight={"bold"}
          _hover={{ textDecor: "none" }}
          color="purple.500"
          textTransform="capitalize"
        >
          View All
        </Link>
      </Center>
      <Center>
        <Text fontSize={"xl"} color="gray.500" textTransform="uppercase">
          or
        </Text>
      </Center>
      <CareerPlanner />
    </>
  );
}

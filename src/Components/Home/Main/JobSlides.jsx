import React from "react";
import styles from "./JobSlides.module.css";
import { Navigation } from "swiper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, HStack, Link, Spacer, Stack, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const jobsData = [
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
  {
    tag: "hot",
    day: 1,
    role: "devOps engineer",
    company: "wipro limited",
    location: "banglore",
    expFrom: 4,
    expTo: 7,
    status: "Be an Early Applicant",
    jobType: "regular",
    noOfPositions: 0,
  },
];
export const JobSlides = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Stack w="90%" mx="auto" mt="30px" pos="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={50}
          slidesPerView={3}
          className={`${styles.slide1}`}
        >
          {jobsData.map((item, i) => {
            return (
              <SwiperSlide className={styles.sliderChild} key={i}>
                <Flex
                  p={4}
                  direction="column"
                  _hover={{ border: "1px", borderColor: "purple.500" }}
                  color="gray.600"
                >
                  <HStack>
                    <Text textTransform="capitalize">{item.tag}</Text>
                    <Spacer />
                    <Text>{item.day} day ago</Text>
                  </HStack>
                  <Text
                    textTransform="capitalize"
                    fontSize={"xl"}
                    fontWeight="bold"
                    color={"black"}
                  >
                    {item.role}
                  </Text>
                  <Text textTransform="capitalize">{item.company}</Text>
                  <Flex direction="row">
                    <Text textTransform="capitalize">{item.location}</Text>

                    <Text>
                      <BsBag display="inline" border="1px" />
                      {item.expFrom} to
                      {item.expTo}
                    </Text>
                  </Flex>
                  <HStack>
                    <Text>{item.status}</Text>
                    <Text>{item.jobType}</Text>
                  </HStack>
                  <Box display={"flex"} justifyContent="flex-end">
                    <Link
                      fontWeight="semibold"
                      color={"purple.600"}
                      _hover={{ textDecoration: "none" }}
                      href="#"
                      isExternal
                    >
                      Apply
                    </Link>
                  </Box>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box className={styles.prev} ref={navigationPrevRef}>
          <HiChevronLeft />
        </Box>
        <Box className={styles.next} ref={navigationNextRef}>
          <HiChevronRight />
        </Box>
      </Stack>
      );
    </>
  );
};

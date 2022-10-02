import React from "react";
import styles from "./JobSlides.module.css";
import { Navigation } from "swiper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, HStack, Link, Spacer, Stack, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const JobSlides = ({ data }) => {
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
          {data &&
            data?.map((item, i) => {
              return (
                <SwiperSlide className={styles.sliderChild} key={i}>
                  <Flex
                    p={4}
                    direction="column"
                    _hover={{ border: "1px", borderColor: "purple.500" }}
                    color="gray.600"
                    fontSize={"13px"}
                    h="200px"
                    pos={"relative"}
                    lineHeight="7"
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
                      noOfLines={2}
                    >
                      {item.role}
                    </Text>
                    <Text
                      textTransform="capitalize"
                      noOfLines={1}
                      fontSize={"md"}
                    >
                      {item.company}
                    </Text>
                    <Flex gap={6} direction="row">
                      <HStack textTransform="capitalize">
                        <IoLocationOutline />
                        <Text>{item.location}</Text>
                      </HStack>

                      <HStack>
                        <BsBag />
                        <Text>
                          {item.expFrom} to {item.expTo} Yrs
                        </Text>
                      </HStack>
                    </Flex>
                    <HStack>
                      <Text>{item.status === "" ? "" : item.status}</Text>
                      <Text>{item.jobType}</Text>
                      <Text>
                        {item.noOfPositions === 0
                          ? ""
                          : `${item.noOfPositions} Positions`}
                      </Text>
                    </HStack>
                    <Box pos={"absolute"} bottom="25px" right={"25px"}>
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

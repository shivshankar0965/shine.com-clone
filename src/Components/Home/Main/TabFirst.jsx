import React from "react";
import { Navigation, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  Box,
  Image,
  Flex,
  Center,
  Link,
} from "@chakra-ui/react";
import styles from "./TabFirst.module.css";
const fristTabData = [
  {
    src: "https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png",
    logo: "https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png",
  },
  {
    src: "https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png",
    logo: "https://static2.shine.com/r/m/images/employerbranding/19b43e6c9ee345faa75540f998db7441.png",
  },
  {
    src: "https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png",
    logo: "https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png",
  },
  {
    src: "https://static2.shine.com/r/m/images/employerbranding/7a22c70f27904e2e81d7ebd1066d55e1.png",
    logo: "https://static2.shine.com/r/m/images/employerbranding/17e4d7d8d2bf419eb023429afacb5154.png",
  },
  {
    src: "https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png",
    logo: "https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png",
  },
];
const brandSrc = [
  "https://static2.shine.com/r/m/images/employerbranding/ab28f0af876f42cb96302faaea9e1671.png",
  "https://static2.shine.com/r/m/images/employerbranding/b076fc83cebb42069205c9a410c9f618.png",
  "https://static2.shine.com/r/m/images/employerbranding/a307d745fbbe46d3822e5b4e6f3fed55.png",
  "https://static2.shine.com/r/m/images/employerbranding/9b944622fc46422786322e57d29a4225.png",
  "https://static2.shine.com/r/m/images/employerbranding/7f5bc2c5010f4e0fbff014205842ff27.png",
  "https://static2.shine.com/r/m/images/employerbranding/e93bc72765914ce481fc7d0611df7536.png",
  "https://static2.shine.com/r/m/images/employerbranding/8ec12c71c03445248ec99942e16a812c.png",
  "https://static2.shine.com/r/m/images/employerbranding/9f53b7d4345d41ac9b657b726b6b3349.png",
  "https://static2.shine.com/r/m/images/employerbranding/24d6c76bfae84a6f8bd18522f4744b3a.png",
  "https://static2.shine.com/r/m/images/employerbranding/666b83a3c4974b4f92613fce536a4251.png",
  "https://static2.shine.com/r/m/images/employerbranding/700cc0d27c8b416bbfb9c2765652c9cd.png",
  "https://static2.shine.com/r/m/images/employerbranding/264470edd81541d190bc774a279534aa.png",
  "https://static2.shine.com/r/m/images/employerbranding/ff95730b6bcf435d88f28bc48087cad7.png",
  "https://static2.shine.com/r/m/images/employerbranding/5d67eda26b6743a0965a82cd64af6c4b.png",
];
function TabFirst() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Stack w="85%" mx="auto" mt="30px">
        <Tabs align="center" variant="unstyled">
          <TabList gap="20px">
            <Tab
              py={"5px"}
              border="1px"
              borderColor="purple.400"
              borderRadius="25px"
              fontWeight="semibold"
              color="purple.500"
              _selected={{ border: "none", color: "black", bg: "purple.100" }}
            >
              COOL PLACES TO WORK
            </Tab>
            <Tab
              Tab
              border="1px"
              borderColor="purple.400"
              borderRadius="25px"
              fontWeight="semibold"
              color="purple.500"
              _selected={{ border: "none", color: "black", bg: "purple.100" }}
            >
              TOP COMPANIES HIRING
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              gap={6}
              display={"grid"}
              gridTemplateColumns="repeat(5, 1fr)"
            >
              {fristTabData?.map((ele, idx) => {
                return (
                  <Flex shadow={"md"} gap="6" direction="column" key={idx}>
                    <Box>
                      <Image w="100%" src={ele.src} alt={idx} />
                    </Box>
                    <Box>
                      <Image w={"120px"} p="2" src={ele.logo} alt={idx} />
                    </Box>
                  </Flex>
                );
              })}
            </TabPanel>
            <TabPanel position="relative">
              <Swiper
                modules={[Navigation, Grid]}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                grid={{
                  rows: 2,
                  fill: "row",
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                autoplay={{
                  delay: 3000,
                }}
                spaceBetween={30}
                slidesPerView={6}
                className={`mySwiper ${styles.slide1}`}
              >
                {brandSrc.map((el, i) => {
                  return (
                    <SwiperSlide className={styles.slideChild} key={i}>
                      <Image src={el} />
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
              <Center>
                <Link
                  fontSize="md"
                  textDecoration="none"
                  href="https://www.shine.com/company-branding"
                  isExternal
                  fontWeight="semibold"
                  color="purple.500"
                  _hover={{ textDecor: "none", color: "purple.700" }}
                >
                  View All
                </Link>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
}

export default TabFirst;

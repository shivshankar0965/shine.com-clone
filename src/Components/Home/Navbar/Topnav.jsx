import {
  Image,
  Stack,
  HStack,
  Spacer,
  Text,
  Box,
  Link,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoPhonePortraitSharp, IoPersonOutline } from "react-icons/io5";
import { GiVibratingSmartphone } from "react-icons/gi";
export const Topnav = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const over = (e) => {
    setVisible(true);
  };
  const out = (e) => {
    setVisible(false);
  };
  const over1 = (e) => {
    setVisible1(true);
  };
  const out1 = (e) => {
    setVisible1(false);
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <Stack backgroundColor={"gray.100"}>
      <HStack width="85%" mx={"auto"}>
        <Spacer />
        <HStack fontWeight={"semibold"} spacing={6} fontSize={"sm"} py={3}>
          <Box
            onMouseOver={over}
            onMouseLeave={out}
            display={"flex"}
            alignItems="center"
            pos={"relative"}
          >
            <Box fontSize={"lg"}>
              <IoPhonePortraitSharp />
            </Box>
            <Text ml={2}>Download App</Text>
            <Box
              pos="absolute"
              top="26px"
              right="0"
              display={isVisible ? "block" : "none"}
              h={"2px"}
              backgroundColor="purple.600"
              width="98%"
            ></Box>
            <VStack
              shadow="md"
              display={isVisible ? "block" : "none"}
              pos={"absolute"}
              zIndex={5}
              right="0"
              top="28px"
              background={"white"}
              p="4"
              borderRadius="md"
              width={"300px"}
            >
              <Heading as={"h1"} size="md">
                Download Shine App
              </Heading>
              <Text color={"grey.500"}>
                Get The Best Experience Of Shine At Your Fingertips
              </Text>
              <HStack display={"grid"} gridTemplateColumns="repeat(2, 1fr)">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.net.shine&referrer=utm_source%3Ddesktop%26utm_medium%3Dorganic"
                  target="_blank"
                >
                  <Image
                    style={imageStyle}
                    src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png"
                  />
                </Link>
                <Link
                  href="https://itunes.apple.com/in/app/shine.com-job-search/id950558510?ls=1&mt=8&utm_source=Shinewebpage&utm_medium=banner&utm_campaign=ios_app"
                  target="_blank"
                >
                  <Image
                    style={imageStyle}
                    width="md"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0-VifLPKywOa4lSu4LWfOfsBb-lNBJrrRw&usqp=CAU"
                  />
                </Link>
              </HStack>
            </VStack>
          </Box>
          <Link href="https://recruiter.shine.com/" isExternal>
            <Box
              as="button"
              fontWeight={"semibold"}
              display={"flex"}
              alignItems="center"
            >
              <Box fontSize={"lg"}>
                <IoPersonOutline />
              </Box>

              <Text ml={2}>For Employers</Text>
            </Box>
          </Link>
          <Box
            onMouseOver={over1}
            onMouseLeave={out1}
            pos="relative"
            display={"flex"}
            alignItems="center"
          >
            <Box fontSize={"lg"}>
              <GiVibratingSmartphone />
            </Box>
            <Text ml={2}>Help</Text>

            <Box
              pos="absolute"
              top="26px"
              right="0"
              display={isVisible1 ? "block" : "none"}
              h={"2px"}
              backgroundColor="purple.600"
              width="98%"
            ></Box>
            <VStack
              shadow="md"
              display={isVisible1 ? "block" : "none"}
              background={"white"}
              p="4"
              zIndex={5}
              borderRadius="md"
              pos={"absolute"}
              right="0"
              top="28px"
              width={"240px"}
              textAlign="center"
            >
              <Link textDecoration={"none"} href="tel:7631073551">
                <Heading as={"h1"} size="md">
                  080-10062222
                </Heading>
              </Link>
              <Text>9am - 6pm, Mon To Sat</Text>
            </VStack>
          </Box>
        </HStack>
      </HStack>
    </Stack>
  );
};

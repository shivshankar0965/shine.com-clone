import {
  Stack,
  HStack,
  Box,
  Image,
  Text,
  Link,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import React from "react";
const jobseekersLinks = [
  {
    title: "Register / Login",
    link: "https://www.shine.com/new-registration/",
  },
  {
    title: "Browse Jobs",
    link: "https://www.shine.com/job-search/",
  },
  {
    title: "Create Free Job Alert",
    link: "https://www.shine.com/free-job-alerts/",
  },
  {
    title: "job assistance service",
    link: "https://resume.shine.com/",
  },
  {
    title: "courses",
    link: "https://learning.shine.com/",
  },
];
const employer = [
  {
    title: "recruiter india",
    link: "https://recruiter.shine.com/?utm_source=shine&utm_medium=footer&utm_campaign=Candidate",
  },
  {
    title: "post job",
    link: "https://recruiter.shine.com/online-package/personaldetail/?package_id=31&utm_source=shine&utm_medium=footer&utm_campaign=Candidate",
  },
];
const partners = [
  {
    title: "english mate",
    link: "https://www.englishmate.com/",
  },
  {
    title: "study mate",
    link: "https://www.studymateonline.com/",
  },
  {
    title: "Hindustimes.com",
    link: "https://www.hindustantimes.com/?_gl=1*16k5o72*_gcl_aw*R0NMLjE2NjQyNzUzMzYuQ2p3S0NBand2c3FaQmhBbEVpd0FxQUhFbFNMWW5xOWVvMTBpZVR0SkRya3JKbUZpN3F1b3UwZWtfU0FtaTE5YmljWko0Zkd6WEh0enV4b0N4YW9RQXZEX0J3RQ",
  },
  {
    title: "livemint.com",
    link: "https://www.livemint.com/",
  },
  {
    title: "livehindustan.com",
    link: "https://www.livehindustan.com/?_gl=1*1v9lrsy*_gcl_aw*R0NMLjE2NjQyNzUzMzYuQ2p3S0NBand2c3FaQmhBbEVpd0FxQUhFbFNMWW5xOWVvMTBpZVR0SkRya3JKbUZpN3F1b3UwZWtfU0FtaTE5YmljWko0Zkd6WEh0enV4b0N4YW9RQXZEX0J3RQ..",
  },
  {
    title: "oTTplay.com",
    link: "https://www.ottplay.com/?utm_source=shine&utm_medium=partner-site&utm_campaign=april-21",
  },
];
const contact = [
  {
    title: "080-1006 2222",
    link: "tel:7631073551",
  },

  {
    title: "contactus@shine.com",
    link: "tel:7631073551",
  },
];
const social = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/company/shinecom/",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJfZnLlBQJXEI8P1_g_QsdNuujdjAFH9Nqw&usqp=CAU",
    link: "https://twitter.com/Shinedotcom?lang=en",
  },
  {
    icon: "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png",
    link: "https://www.facebook.com/shinedotcom/",
  },
];
const links = [
  {
    title: "feedback",
    link: "https://www.shine.com/#",
  },
  {
    title: "fAQs",
    link: "https://www.shine.com/faqs/",
  },
  {
    title: "about us",
    link: "https://www.shine.com/aboutus/",
  },
  {
    title: "contact us",
    link: "https://www.shine.com/contactus/",
  },
  {
    title: "privacy policy",
    link: "https://www.shine.com/privacypolicy/",
  },
  {
    title: "cookie policy",
    link: "https://www.shine.com/cookie-policy/",
  },
  {
    title: "fraud alert",
    link: "https://www.shine.com/securityadvice/",
  },
  {
    title: "business news",
    link: "https://www.livemint.com/",
  },
  {
    title: "english news",
    link: "https://www.hindustantimes.com/?_gl=1*npn1is*_gcl_aw*R0NMLjE2NjQyNzUzMzYuQ2p3S0NBand2c3FaQmhBbEVpd0FxQUhFbFNMWW5xOWVvMTBpZVR0SkRya3JKbUZpN3F1b3UwZWtfU0FtaTE5YmljWko0Zkd6WEh0enV4b0N4YW9RQXZEX0J3RQ..",
  },
  {
    title: "terms & conditions ",
    link: "https://www.shine.com/termsandconditions/",
  },
  {
    title: "disclaimer",
    link: "https://www.shine.com/disclaimer/",
  },
  {
    title: "report a job posting",
    link: "https://www.shine.com/contactus/?type=reportJobPosting",
  },
];
export const Footer = () => {
  return (
    <Stack mt={10} backgroundColor={"#fafaff"} pt="10">
      <HStack
        w={"85%"}
        mx="auto"
        display={"flex"}
        justify="space-between"
        align="flex-start"
      >
        <Box lineHeight={"50px"}>
          <Image
            w={"80px"}
            src="https://www.shine.com/next/static/images/shine-logo.png"
            alt="logo"
          />
          <Text mt={"-10px"} color={"gray.500"}>
            Great Career Start Here!
          </Text>
          <Text fontWeight={"semibold"}>Download Shine App</Text>
          <HStack spacing={"8"}>
            <Link
              ml="-8px"
              href="https://play.google.com/store/apps/details?id=com.net.shine&referrer=utm_source%3Ddesktop%26utm_medium%3Dorganic"
              isExternal
            >
              <Image
                w={"40px"}
                src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-icon-logo.png"
                alt="play store logo"
              />
            </Link>
            <Link
              href="https://itunes.apple.com/in/app/shine.com-job-search/id950558510?ls=1&mt=8&utm_source=Shinewebpage&utm_medium=banner&utm_campaign=ios_app"
              isExternal
            >
              <Image
                color={"gray.500"}
                w={"20px"}
                src="https://img.favpng.com/9/24/2/apple-logo-scalable-vector-graphics-icon-png-favpng-cY95aZvvhkZ7VaUP2tcNJmi3s.jpg"
                alt="apple logo"
              />
            </Link>
          </HStack>
        </Box>
        <Box>
          <Text fontSize={"sm"} fontWeight="semibold" color={"gray.600"}>
            JOB SEEKERS
          </Text>
          {jobseekersLinks?.map((item, i) => {
            return (
              <Text
                textTransform={"capitalize"}
                fontSize={"sm"}
                mt="3"
                color={"purple.500"}
                key={i}
              >
                <Link _hover={{ textDecor: "none" }} href={item.link}>
                  {item.title}
                </Link>
              </Text>
            );
          })}
        </Box>
        <Box>
          <Text fontSize={"sm"} fontWeight="semibold" color={"gray.600"}>
            EMPLOYERS
          </Text>
          {employer?.map((item, i) => {
            return (
              <Text
                textTransform={"capitalize"}
                fontSize={"sm"}
                mt="3"
                color={"purple.500"}
                key={i}
              >
                <Link _hover={{ textDecor: "none" }} href={item.link}>
                  {item.title}
                </Link>
              </Text>
            );
          })}
        </Box>
        <Box>
          <Text fontSize={"sm"} fontWeight="semibold" color={"gray.600"}>
            EMPLOYERS
          </Text>
          {partners?.map((item, i) => {
            return (
              <Text
                textTransform={"capitalize"}
                fontSize={"sm"}
                mt="3"
                color={"purple.500"}
                key={i}
              >
                <Link _hover={{ textDecor: "none" }} href={item.link}>
                  {item.title}
                </Link>
              </Text>
            );
          })}
        </Box>
        <Box>
          <Text fontSize={"sm"} fontWeight="semibold" color={"gray.600"}>
            EMPLOYERS
          </Text>
          {contact?.map((item, i) => {
            return (
              <Text
                textTransform={"capitalize"}
                fontSize={"sm"}
                mt="3"
                color={"purple.500"}
                key={i}
              >
                <Link _hover={{ textDecor: "none" }} href={item.link}>
                  {item.title}
                </Link>
              </Text>
            );
          })}
          <HStack mt={3}>
            {social?.map((item, i) => {
              return (
                <Box key={i}>
                  <Link href={item.link} isExternal>
                    <Image w="20px" src={item.icon} alt={i} />
                  </Link>
                </Box>
              );
            })}
          </HStack>
        </Box>
      </HStack>
      <Divider />
      <HStack
        py="6"
        w={"85%"}
        style={{ margin: "0 auto" }}
        mx="auto"
        fontSize={"xs"}
        color="gray.500"
      >
        <HStack>
          {links?.map((item, i) => {
            return (
              <Text key={i}>
                {item.title} {i === links.length - 1 ? "" : "|"}
              </Text>
            );
          })}
        </HStack>
        <Spacer />
        <Text>© 2022 HT Media Limited</Text>
      </HStack>
    </Stack>
  );
};

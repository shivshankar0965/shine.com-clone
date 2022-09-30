import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  Box,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
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
function TabFirst() {
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
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
}

export default TabFirst;

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import WhatWeDo from "./WhatWeDo";
import Contact from "./Contact";
import ForUs from "./ForUs";

const About = () => {
  return (
    <Tabs padding={30} mt={"50px"}>
      <TabList justifyContent={"space-around"}>
        <Tab>Кои сме ние</Tab>
        <Tab>Какво правим</Tab>
        <Tab>Свържете се с нас</Tab>
      </TabList>
      <TabPanels>
        <ForUs />
        <WhatWeDo />
        <Contact />
      </TabPanels>
    </Tabs>
  );
};

export default About;

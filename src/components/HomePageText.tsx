import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
const HomePageText = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      position="relative"
    >
      <Text fontWeight="bold" fontSize="xl" mb="2">
        Cute Kitten
      </Text>
      <Text fontSize="sm" color="gray.600">
        A lovely kitten for your enjoyment.
      </Text>
    </Flex>
  );
};

export default HomePageText;

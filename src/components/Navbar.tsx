import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FaAnchor, FaAngleDoubleDown } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.38139005602240894) 36%, rgba(0,155,255,0.6951155462184874) 86%);"
      color="white"
    >
      <Text fontSize="2xl">Logo</Text>
      <Box display={{ base: "block", md: "none" }}>
        <FaAngleDoubleDown onClick={toggleMenu} size={36} />
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems={"center"}
        justifyContent={"flex-end"}
        flexGrow={1}
        marginLeft={{ base: 300, md: 0 }}
        paddingTop={{ base: 10, md: 0 }}
      >
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Кои сме ние
        </Link>
        <Text fontSize="lg" mr={4}>
          About
        </Text>
        <Text fontSize="lg" mr={4}>
          Services
        </Text>
        <Text fontSize="lg" mr={4}>
          Contact
        </Text>
      </Box>
    </Flex>
  );
};

export default Navbar;

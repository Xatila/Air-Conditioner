import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import HomePageImage from "./components/HomePageImage";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductsContainer from "./components/ProductsContainer";
import About from "./components/About";
import HomePageText from "./components/HomePageText";
const images = ["/images/1.jpg","/images/2.jpg"]
export const App = () => 
  <>
  <ChakraProvider theme={theme}>
    <Navbar />
    <HomePageImage></HomePageImage>
    <ProductsContainer />
    <About />
    
  </ChakraProvider>;
  </>
;

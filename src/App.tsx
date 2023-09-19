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
export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <HomePageImage></HomePageImage>
    <ProductsContainer/>
    <About/>
  </ChakraProvider>
);

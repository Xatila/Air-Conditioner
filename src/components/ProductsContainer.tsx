import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardProduct from "./CardProduct";

const ProductsContainer = () => {
  return (
    <SimpleGrid
      pt={6}
      spacing={12}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
    </SimpleGrid>
  );
};

export default ProductsContainer;

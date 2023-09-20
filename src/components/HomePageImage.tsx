import { Box, Img } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
const HomePageImage = () => {
  return (
    <Box
      backgroundImage={"/Air-Conditioner/images/back.jpg"}
      display={"flex"}
      justifyContent="center"
      padding={10}
    >
      <ImageSlider></ImageSlider>
    </Box>
  );
};

export default HomePageImage;

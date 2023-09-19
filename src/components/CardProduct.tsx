import {
  Card,
  Heading,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import Details from "./Details";
import "../App.css";

const CardProduct = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg"> Mitsubishi Electric 920S</Heading>
      </CardHeader>
      <CardBody>
        <Image className="grow" src="/images/test.png" />
      </CardBody>
      <CardFooter>
        <Details />
      </CardFooter>
    </Card>
  );
};

export default CardProduct;

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import TableInfo from "./TableInfo";

const Details = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Повече</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Информация:</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <TableInfo />
            Този климатик е със специален клас за тва онова и още нещо..
          </PopoverBody>
          <PopoverFooter>
            Обади се за консултация.
            <Button ml={10} padding={4} colorScheme="green">
              Call
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Details;

import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

const TableInfo = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Параметри обявени от производителя</TableCaption>
        <Thead>
          <Tr>
            <Th>Работоспособност</Th>
            <Th>Разход</Th>
            <Th isNumeric>Клас</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1 час</Td>
            <Td>0.2 Kw</Td>
            <Td isNumeric>А+++</Td>
          </Tr>
          <Tr>
            <Td>От 0 до 20 градуса</Td>
            <Td>за стая </Td>
            <Td isNumeric>А++</Td>
          </Tr>
          <Tr>
            <Td>12000 PK</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>60 кв.м</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableInfo;

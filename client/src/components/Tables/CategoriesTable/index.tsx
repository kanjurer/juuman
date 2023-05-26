import { ExpenseCategory } from '@/interfaces';
import { Amount } from '@/interfaces';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';

export default function CategoriesTable({ dataMap }: CategoriesTableProps) {
  return (
    <TableContainer>
      <Table size="md" height="100px">
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Total Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(dataMap).map(([categoryId, amount]) => (
            <Tr key={categoryId}>
              <Td>{categoryId}</Td>
              <Td isNumeric>
                {amount.currency} {amount.value}
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
        <Tr>
          <Th>Category</Th>
          <Th>Name</Th>
          <Th isNumeric>Amount</Th>
          <Th isNumeric>Date</Th>
        </Tr>
      </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

interface CategoriesTableProps {
  dataMap: {
    [key: string]: Amount;
  };
}

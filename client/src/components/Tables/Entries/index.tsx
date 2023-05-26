import { ExpenseEntry, IncomeEntry } from '@/interfaces';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function Entries({ entriesData }: EntriesProps) {
  return (
    <TableContainer>
      <Table size="md" height="100px">
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Name</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entriesData.map(
            ({ id, name, category, amount: { currency, value } }) => (
              <Tr key={id}>
                <Td>{category.name}</Td>
                <Td>{name}</Td>
                <Td isNumeric>
                  {currency} {value}
                </Td>
              </Tr>
            )
          )}
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

interface EntriesProps {
  entriesData: Array<ExpenseEntry | IncomeEntry>;
}

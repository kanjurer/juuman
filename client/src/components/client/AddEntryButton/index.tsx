import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spacer,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { EXPENSECATEGORIES, INCOMECATEGORIES } from '@/data';
import { ExpenseEntry, IncomeEntry } from '@/interfaces';
import { postExpenseEntry, postIncomeEntry } from '@/api';

export default function AddEntryButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen} width="50px">
        <AddIcon />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Bananas" />
            </FormControl>
            <Spacer />
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select variant="filled">
                {EXPENSECATEGORIES.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => false}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function AddExpenseButton({
  setExpense,
}: {
  setExpense: React.Dispatch<React.SetStateAction<ExpenseEntry[]>>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddButton = async () => {
    onClose();
    const expense = {
      id: '123',
      name: 'Papaya',
      category: { name: 'Food', id: '123' },
      amount: {
        value: 100,
        currency: '$',
      },
      date: '2022-12-12',
    };

    const data = await postExpenseEntry(expense);
    setExpense((e) => [data, ...e]);
  };

  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen} width="50px">
        <AddIcon />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Bananas" />
            </FormControl>
            <Spacer />
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select variant="filled">
                {EXPENSECATEGORIES.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddButton}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function AddIncomeButton({
  setIncome,
}: {
  setIncome: React.Dispatch<React.SetStateAction<IncomeEntry[]>>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddButton = async () => {
    onClose();
    const income = {
      id: '1212',
      name: 'Papaya',
      category: { name: 'Food', id: '123' },
      amount: {
        value: 100,
        currency: '$',
      },
      date: '2022-12-12',
    };

    const data = await postIncomeEntry(income);
    setIncome((e) => [data, ...e]);
  };

  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen} width="50px">
        <AddIcon />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Income</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Bananas" />
            </FormControl>
            <Spacer />
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select variant="filled">
                {INCOMECATEGORIES.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddButton}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

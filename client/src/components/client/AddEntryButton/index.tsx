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

import { EXPENSECATEGORIES } from '@/data';

export default function AddEntryButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen}>
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

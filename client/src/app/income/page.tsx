'use client';

import Entries from '@/components/client/Entries';
import { Income } from '@/components/client/DataBubbles';
import { Flex } from '@chakra-ui/react';

import { INCOMES } from '@/data';

export default function IncomePage() {
  return (
    <>
      <Flex flexDirection="column">
        <Income displayValue={2000} />
      </Flex>
      <Entries entriesData={INCOMES} />
    </>
  );
}

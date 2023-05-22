'use client';

import { Stack, Box, Link } from '@chakra-ui/react';

const navLinks = {
  Home: '/home',
  Profile: '/profile',
  Expenses: '/expenses',
  Income: '/income',
};

export default function Footer() {
  return (
    <footer
      style={{ height: '100px', backgroundColor: 'black', color: 'white' }}
    >
      this is footer
    </footer>
  );
}

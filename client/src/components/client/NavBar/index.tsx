'use client';

import { Stack, Box, Link, Image } from '@chakra-ui/react';
import NavLink from './NavLink';

const navLinks = {
  Home: '/home',
  Profile: '/profile',
  Expenses: '/expenses',
  Income: '/income',
};

export default function NavBar() {
  return (
    <nav style={{ margin: '5px', marginBottom: '10px' }}>
      <Stack direction={['column', 'row']} spacing="24px">
        <Image src="/next.svg" alt="Logo" width="100px" />
        {Object.entries(navLinks).map(([k, v]) => {
          return (
            <NavLink key={v} href={v}>
              {k}
            </NavLink>
          );
        })}
      </Stack>
    </nav>
  );
}

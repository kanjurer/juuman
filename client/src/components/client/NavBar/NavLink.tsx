import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link color="teal.400" as={NextLink} href={href}>
      {children}
    </Link>
  );
}

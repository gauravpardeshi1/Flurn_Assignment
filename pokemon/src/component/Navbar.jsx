import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,

  MenuItem,
  Stack,

  IconButton,
  useDisclosure,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


const navLinks = [
  { name: 'Lists', path: '/lists' },
  { name: 'Bookmark', path: '/bookmark' },
  { name: 'Searching', path: '/search' }
];



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={useColorModeValue('white', 'gray.800')}>
      <Flex h={16} bg='teal' color='white' fontWeight={600} fontSize={20} alignItems="center" justifyContent="space-evenly" mx="auto">

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">

            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}




          </HStack>
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: 'inherit', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component


const NavLink = ({ name, path, onClose }) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.200')
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component


const MenuLink = ({ name, path, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};
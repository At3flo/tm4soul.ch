import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Heading,
  Box,
  Link,
} from '@chakra-ui/react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} leftIcon={<HamburgerIcon />} h="100%">
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="/">
            Home
          </MenuItem>
          <MenuItem as="a" href="/photography">
            Photography
          </MenuItem>
        </MenuList>
      </Menu>
      <Box display="flex">
        <Link
          href="https://www.facebook.com/TM4Soul/"
          isExternal
          _hover={{ color: 'primary.accent' }}
        >
          <Heading p="2" size="2xl">
            <BsFacebook />
          </Heading>
        </Link>
        <Link
          href="https://www.instagram.com/tm_4soul/"
          isExternal
          _hover={{ color: 'primary.accent' }}
        >
          <Heading p="2" size="2xl">
            <BsInstagram />
          </Heading>
        </Link>
      </Box>
    </>
  )
}

export default Navbar

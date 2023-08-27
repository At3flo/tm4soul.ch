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
  Spacer,
  Flex,
} from '@chakra-ui/react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <Flex
        bg="primary.gray"
        w="100%"
        m="5"
        p="2"
        px="5"
        rounded="md"
        alignItems="center"
      >
        <Menu>
          <MenuButton as={Button} leftIcon={<HamburgerIcon />} h="50px">
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href="/">
              Home
            </MenuItem>
            <MenuItem as="a" href="/photography">
              Fotografie
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box display="flex">
          <Link
            href="https://www.facebook.com/TM4Soul/"
            isExternal
            _hover={{ color: 'primary.white' }}
          >
            <Heading p="2" size="2xl">
              <BsFacebook />
            </Heading>
          </Link>
          <Link
            href="https://www.instagram.com/tm_4soul/"
            isExternal
            _hover={{ color: 'primary.white' }}
          >
            <Heading p="2" size="2xl">
              <BsInstagram />
            </Heading>
          </Link>
        </Box>
      </Flex>
    </>
  )
}

export default Navbar

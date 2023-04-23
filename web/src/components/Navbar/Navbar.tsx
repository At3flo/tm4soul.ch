import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Heading,
  Box
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
          <MenuItem>Test 1</MenuItem>
          <MenuItem>Test 2</MenuItem>
        </MenuList>
      </Menu>
      <Box display="flex">
        <Heading p="2" size="2xl">
          <BsFacebook />
        </Heading>
        <Heading p="2" size="2xl">
          <BsInstagram />
        </Heading>
      </Box>
    </>
  )
}

export default Navbar

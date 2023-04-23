// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      gray: 'gray',
      white: '#fff',
      black: '#000',
    },
  },
})

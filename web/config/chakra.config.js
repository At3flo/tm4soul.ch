// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options

import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
  border: '1px solid', // change the appearance of the border
  backgroundColor: 'primary.gray',
})

export const badgeTheme = defineStyleConfig({
  variants: { brandPrimary },
})

export const theme = extendTheme({
  colors: {
    primary: {
      gray: '#898d97ff',
      white: '#fff',
      black: '#000',
      main: '#9A38B5FF',
      accent: '#ff7b4bff',
      link: 'var(--chakra-colors-primary-accent)',
    },
  },
  components: { Badge: badgeTheme },
})

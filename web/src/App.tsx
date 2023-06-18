import { useEffect } from 'react'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { theme } from 'config/chakra.config'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const extendedTheme = extendTheme(theme)

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.primary.black
  })

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <ColorModeScript />
        <ChakraProvider theme={extendedTheme}>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </ChakraProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App

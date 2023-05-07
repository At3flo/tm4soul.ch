import { Button } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import { LogoTM4Soul } from '../Logo/Logo'

type PetalLink = {
  link: string
}

type Petal = {
  [key: string]: PetalLink
}

class NavigationLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('NavigationLogo mounted')
    const petals: Petal = {
      'petal_right-down': { link: routes.photography() },
      'petal_left-down': { link: 'https://www.tm4soul.ch/' },
      'petal_right-up': { link: 'https://www.tm4soul.ch/' },
      'petal_left-up': { link: 'https://www.tm4soul.ch/' },
    }

    // for loop for object petals
    for (const [key, value] of Object.entries(petals)) {
      const el = document.getElementById(key)

      el.addEventListener('mouseover', () => (el.style.fill = 'white'))
      el.addEventListener('mouseleave', () => (el.style.fill = 'red'))

      // if value.link starts with '/' navigate to that local page
      el.addEventListener('click', () => {
        if (value.link.charAt(0) === '/') {
          navigate(value.link)
        } else {
          window.location.href = value.link
        }
      })
    }
  }

  render() {
    return (
      <>
        <LogoTM4Soul />
      </>
    )
  }
}

export default NavigationLogo

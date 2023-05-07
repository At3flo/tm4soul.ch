import { navigate, routes } from '@redwoodjs/router'

import { SVGLogoTM4Soul } from './SVGLogoTM4Soul'

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
    const petals: Petal = {
      'petal_right-down': { link: routes.photography() },
      'petal_left-down': { link: 'https://www.tm4soul.ch/' },
      'petal_right-up': { link: 'https://www.tm4soul.ch/' },
      'petal_left-up': { link: 'https://www.tm4soul.ch/' },
    }

    // loop on every petal SVG part to create hover effect
    for (const [key, value] of Object.entries(petals)) {
      const el = document.getElementById(key)

      el.addEventListener('mouseover', () => (el.style.fill = 'yellow'))
      el.addEventListener('mouseleave', () => (el.style.fill = 'white'))

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
        <SVGLogoTM4Soul />
      </>
    )
  }
}

export default NavigationLogo

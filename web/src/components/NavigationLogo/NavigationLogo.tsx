import { theme } from 'config/chakra.config'

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
      'petal_right-down': { link: null },
      'petal_left-down': { link: null },
      'petal_right-up': { link: null },
      'petal_left-up': { link: routes.photography() },
    }

    // loop on every petal SVG part to create hover effect
    for (const [key, value] of Object.entries(petals)) {
      const el = document.getElementById(key)

      if (value.link === null) {
        el.addEventListener(
          'mouseover',
          () => (el.style.fill = theme.colors.primary.gray)
        )
        el.addEventListener(
          'mouseleave',
          () => (el.style.fill = theme.colors.primary.white)
        )
      } else {
        el.addEventListener('mouseover', () => {
          el.style.fill = theme.colors.primary.main
          el.style.cursor = 'pointer'
        })
        el.addEventListener(
          'mouseleave',
          () => (el.style.fill = theme.colors.primary.white)
        )

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
  }

  // TODO: vertically center SVG logo
  render() {
    return <SVGLogoTM4Soul height="80vh" />
  }
}

export default NavigationLogo

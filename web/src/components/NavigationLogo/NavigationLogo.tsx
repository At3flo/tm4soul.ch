import { Button } from '@chakra-ui/react'

import { FormError } from '@redwoodjs/forms'

import { LogoTM4Soul } from '../Logo/Logo'

class NavigationLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('NavigationLogo mounted')
    const petals = {
      'petal_right-down': { link: 'https://www.tm4soul.ch/' },
      'petal_left-down': { link: 'https://www.tm4soul.ch/' },
      'petal_right-up': { link: 'https://www.tm4soul.ch/' },
      'petal_left-up': { link: 'https://www.tm4soul.ch/' },
    }

    // for loop for object petals
    for (const [key, value] of Object.entries(petals)) {
      const el = document.getElementById(key)
      // el.addEventListener('mouseover', this.handleButtonClick.bind(this))
      el.addEventListener('mouseover', () => (el.style.fill = 'white'))
      el.addEventListener('mouseleave', () => (el.style.fill = 'red'))
      el.addEventListener('click', () => (window.location.href = value.link))
    }
  }

  handleButtonClick() {
    console.log('clicked')
    const el = document.getElementById('petal_right-down')
    // toggle fill color from white to black with a ternary operator
    el.style.fill = el.style.fill === 'white' ? 'red' : 'white'
  }

  render() {
    return (
      <>
        <LogoTM4Soul />
        <Button onClick={this.handleButtonClick.bind(this)}>Click me</Button>
      </>
      // <div
      //   style={{
      //     position: 'relative',
      //   }}
      // >
      //   <div
      //     style={{
      //       width: '2500px',
      //       position: 'absolute',
      //       left: '50%',
      //       top: '0px',
      //       marginLeft: '-1250px',
      //       zIndex: '1',
      //     }}
      //   >
      //     <img
      //       src="https://tm4soul.ch/assets/img/logo_tm4soul.jpg"
      //       alt=""
      //       style={{
      //         display: 'block',
      //         margin: '0 auto',
      //         clipPath: 'inset(0 500px 10px 0)',
      //       }}
      //     />
      //   </div>
      // </div>
    )
  }
}

export default NavigationLogo

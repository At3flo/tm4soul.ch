import { render } from '@redwoodjs/testing/web'

import NavigationLogo from './NavigationLogo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationLogo />)
    }).not.toThrow()
  })
})

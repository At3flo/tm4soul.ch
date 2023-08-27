import { render } from '@redwoodjs/testing/web'

import GridContainer from './GridContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GridContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridContainer />)
    }).not.toThrow()
  })
})

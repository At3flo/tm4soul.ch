import { render } from '@redwoodjs/testing/web'

import CategoryDescription from './CategoryDescription'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoryDescription', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryDescription />)
    }).not.toThrow()
  })
})

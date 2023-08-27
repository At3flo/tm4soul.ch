import { render } from '@redwoodjs/testing/web'

import WordCloud from './WordCloud'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WordCloud', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WordCloud />)
    }).not.toThrow()
  })
})

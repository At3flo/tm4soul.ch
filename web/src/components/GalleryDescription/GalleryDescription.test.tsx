import { render } from '@redwoodjs/testing/web'

import GalleryDescription from './GalleryDescription'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GalleryDescription', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GalleryDescription />)
    }).not.toThrow()
  })
})

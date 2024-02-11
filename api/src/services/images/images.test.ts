import type { Image } from '@prisma/client'

import { images, image, createImage, updateImage, deleteImage } from './images'
import type { StandardScenario } from './images.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('images', () => {
  scenario('returns all images', async (scenario: StandardScenario) => {
    const result = await images()

    expect(result.length).toEqual(Object.keys(scenario.image).length)
  })

  scenario('returns a single image', async (scenario: StandardScenario) => {
    const result = await image({ uuidImage: scenario.image.one.uuidImage })

    expect(result).toEqual(scenario.image.one)
  })

  scenario('deletes a image', async (scenario: StandardScenario) => {
    const original = (await deleteImage({
      uuidImage: scenario.image.one.uuidImage,
    })) as Image
    const result = await image({ uuidImage: original.uuidImage })

    expect(result).toEqual(null)
  })
})

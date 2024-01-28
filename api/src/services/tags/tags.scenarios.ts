import type { Prisma, Tag } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { tagTitleNormalized: 'String', tagWeight: 6460670 } },
    two: { data: { tagTitleNormalized: 'String', tagWeight: 1992251 } },
  },
})

export type StandardScenario = ScenarioData<Tag, 'tag'>

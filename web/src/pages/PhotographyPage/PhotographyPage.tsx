import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PhotographyPage = () => {
  return (
    <>
      <MetaTags title="Photography" description="Photography page" />

      <h1>PhotographyPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PhotographyPage/PhotographyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>photography</code>, link to me with `
        <Link to={routes.photography()}>Photography</Link>`
      </p>
    </>
  )
}

export default PhotographyPage

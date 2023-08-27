import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Feed/Feed'
import GridContainer from 'src/components/GridContainer/GridContainer'
import NavigationLogo from 'src/components/NavigationLogo/NavigationLogo'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <GridContainer
        mainComponent={<NavigationLogo />}
        sideComponent={<Feed />}
      />
    </>
  )
}

export default HomePage

import { Grid, GridItem, Stack, Divider } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

const GridContainer = ({ mainComponent, sideComponent }) => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
                "main feed"`,
        base: `"nav"
                "main"
                "feed"`,
      }}
      gridTemplateRows={{
        lg: '7em calc(100vh - 7em)',
        base: '7em 0.1fr 0.9fr',
      }}
      gridTemplateColumns={{ lg: '1.3fr 0.7fr', base: '1fr' }}
      rowGap="0"
      columnGap="0"
    >
      <GridItem
        bg="primary.black"
        area={'nav'}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Navbar />
      </GridItem>
      <GridItem bg="primary.black" area={'main'} display="flex" alignItems="center" justifyContent="center">
        {mainComponent}
      </GridItem>
      <GridItem bg="primary.black" area={'feed'}>
        <Stack direction="row" h="calc(100vh - 16em)">
          <Divider
            orientation="vertical"
            borderWidth="2px"
            borderColor="primary.white"
          />
          {sideComponent}
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default GridContainer;
import {  Grid, GridItem, Show, Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import {Genre} from './hooks/useGenre'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
 

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Text fontSize='3xl' paddingX='10px' fontWeight='700'>Genres</Text>
            <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App

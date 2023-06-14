import {  Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import {Genre} from './hooks/useGenre'
import PlatformSelector from "./components/PlatformSelector";
import {  Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortTheGame: string;
  searchText:string;

}

function App() {

  const [gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)
 

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Text fontSize="3xl" paddingX="10px" fontWeight="700">
              Genres
            </Text>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <HStack marginTop={2} spacing={3} paddingLeft={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
            sortName={gameQuery.sortTheGame}
              onSelectSortOrder={(sortTheGame) =>
                setGameQuery({ ...gameQuery, sortTheGame })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App

import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import Critic from "./Critic";
import getCroppedImage from "../services/image-url";

interface Props{
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontFamily="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Critic critic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard
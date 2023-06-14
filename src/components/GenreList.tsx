import { Button, HStack, Image} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import { Spinner } from '@chakra-ui/react';
import getCroppedImage from "../services/image-url";

interface Props{
    onSelectGenre:(genre: Genre)=>void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre,onSelectGenre}: Props) => {
  const { data, isLoading } = useGenres();
  return (
    <>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {data.map((genre) => (
        <HStack key={genre.id} whiteSpace="nowrap" paddingX="10px" marginY="10px">
          <Image
            borderRadius="10px"
            boxSize="40px"
            src={getCroppedImage(genre.image_background)}
          />
          <Button fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} onClick={()=>onSelectGenre(genre)} variant="link" fontSize="lg" key={genre.id}>
            {genre.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

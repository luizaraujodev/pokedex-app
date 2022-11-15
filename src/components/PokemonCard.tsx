import { HStack, VStack, Text, Image, FlatList } from "native-base";
import Pokeball from "@assets/images/pokeball.svg";
import charmander from "@assets/images/04.png";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { addLeadingZeros } from "@utils/string.utils";
import { PokemonTypeCard } from "./PokemonTypeCard";

type Props = TouchableOpacityProps & {
  pokemon: Pokemon;
};

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

export function PokemonCard({ pokemon, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        rounded="lg"
        bg={`${pokemon.types[0].type.name}Bg`}
        h={115}
        w="100%"
        justifyContent="space-between"
        mb={2}
        mt={3}
        shadow="5"
      >
        <VStack m={5}>
          <Text fontFamily="body" fontWeight="700" fontSize="12">
            #{addLeadingZeros(pokemon.id, 3)}
          </Text>
          <Text
            fontFamily="body"
            color="white"
            fontWeight="700"
            fontSize="26"
            textTransform="capitalize"
          >
            {pokemon.name}
          </Text>
          <HStack>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={pokemon.types}
              keyExtractor={(item) => item.type.name}
              renderItem={({ item }) => (
                <PokemonTypeCard type={item.type.name} />
              )}
            ></FlatList>
          </HStack>
        </VStack>
        <VStack>
          <Pokeball />
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            }}
            alt={pokemon.name}
            position="absolute"
            mt={-5}
            w={32}
            h={32}
          />
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

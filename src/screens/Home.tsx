import {
  Text,
  VStack,
  Heading,
  Center,
  Image,
  HStack,
  FlatList,
} from "native-base";
import PokeballHeadingSvg from "@assets/images/pokeball-heading.svg";
import { Input } from "@components/Input";

import { useEffect, useState } from "react";
import api from "@services/api";
import { Alert } from "react-native";
import { PokemonCard } from "@components/PokemonCard";

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      try {
        const response = await api.get("/pokemon");
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfoAboutPokemonsByUrl(
              pokemon.url
            );

            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );

        setPokemons(payloadPokemons as Pokemon[]);
      } catch (err) {
        Alert.alert("ops, algo de errado aconteceu, tente mais tarde");
      } finally {
        setIsLoading(false);
      }
    }

    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data as Request;

    return { id, types };
  }

  return (
    <VStack flex={1}>
      <PokeballHeadingSvg />
      <VStack px={8} mt={-100}>
        <Heading fontSize="38" fontFamily="heading" fontWeight="700">
          Pokedéx
        </Heading>
        <Text fontFamily="body" fontSize="16" fontWeight="400">
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
        <Input mt={5} placeholder="What Pokémon are you looking for?" />
      </VStack>

      <FlatList
        px={8}
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 20 }}
      />
    </VStack>
  );
}

// source={PokeballHeadingSvg}
// defaultSource={PokeballHeadingSvg}
// alt="Pokeball Heading"
// resizeMode="contain"

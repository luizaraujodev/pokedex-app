import {
  Text,
  VStack,
  Heading,
  Center,
  Image,
  HStack,
  FlatList,
  Pressable,
} from "native-base";
import LottieView from "lottie-react-native";
import PokeballHeadingSvg from "@assets/images/pokeball-heading.svg";
import GenerationSvg from "@assets/icons/generation.svg";
import FilterSvg from "@assets/icons/filter.svg";
import SortSvg from "@assets/icons/sort.svg";
import { Input } from "@components/Input";

import { useEffect, useState } from "react";
import api from "@services/api";
import { Alert, TouchableOpacity } from "react-native";
import { PokemonCard } from "@components/PokemonCard";
import { Loading } from "@components/Loading";
import { FilterModal } from "@components/FilterModal";
import { GenerationModal } from "@components/GenerationModal";
import { SortModal } from "@components/SortModal";

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
  const [nextRequest, setNextRequest] = useState("");
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [showGenerationModal, setShowGenerationModal] =
    useState<boolean>(false);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);

  async function getPokemons(): Promise<void> {
    try {
      setIsLoading(true);
      const response =
        nextRequest != ""
          ? await api.get(nextRequest)
          : await api.get("/pokemon");
      const { next, results } = response.data;
      setNextRequest(next);
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

      setPokemons([...pokemons, ...(payloadPokemons as Pokemon[])]);
    } catch (err) {
      Alert.alert("ops, algo de errado aconteceu, tente mais tarde");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setNextRequest("");
    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data as Request;

    return { id, types };
  }

  function ensureAllModalsIsClosed() {
    setShowFilterModal(false);
    setShowGenerationModal(false);
    setShowSortModal(false);
  }

  function handleFilterModal() {
    ensureAllModalsIsClosed();
    setShowFilterModal(true);
  }

  function handleGenerationModal() {
    ensureAllModalsIsClosed();
    setShowGenerationModal(true);
  }

  function handleSortModal() {
    ensureAllModalsIsClosed();
    setShowSortModal(true);
  }

  return (
    <VStack flex={1}>
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
      <GenerationModal
        isOpen={showGenerationModal}
        onClose={() => setShowGenerationModal(false)}
      />
      <SortModal
        isOpen={showSortModal}
        onClose={() => setShowSortModal(false)}
      />
      <PokeballHeadingSvg style={{ position: "absolute" }} />

      <HStack mt={50} alignContent="center" justifyContent="flex-end" px={8}>
        <TouchableOpacity style={{ marginRight: 10, justifyContent: "center" }}>
          <GenerationSvg onPress={handleGenerationModal} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10, justifyContent: "center" }}>
          <SortSvg onPress={handleSortModal} />
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <FilterSvg onPress={handleFilterModal} />
        </TouchableOpacity>
      </HStack>

      <VStack mt={5} px={8} justifyContent="center">
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
        //onEndReached={getPokemons}
      />
      {isLoading ? <Loading /> : <></>}
    </VStack>
  );
}

// source={PokeballHeadingSvg}
// defaultSource={PokeballHeadingSvg}
// alt="Pokeball Heading"
// resizeMode="contain"

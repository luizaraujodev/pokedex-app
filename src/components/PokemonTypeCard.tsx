import { HStack, Text, Pressable, IPressableProps } from "native-base";
import Bug from "@assets/images/bug.svg";
import Dark from "@assets/images/dark.svg";
import Dragon from "@assets/images/dragon.svg";
import Electric from "@assets/images/electric.svg";
import Fairy from "@assets/images/fairy.svg";
import Fighting from "@assets/images/fighting.svg";
import Fire from "@assets/images/fire.svg";
import Flying from "@assets/images/flying.svg";
import Ghost from "@assets/images/ghost.svg";
import Grass from "@assets/images/grass.svg";
import Ground from "@assets/images/ground.svg";
import Ice from "@assets/images/ice.svg";
import Normal from "@assets/images/normal.svg";
import Poison from "@assets/images/poison.svg";
import Psychic from "@assets/images/psychic.svg";

type Props = IPressableProps & {
  type: string;
};

const MARGIN_RIGHT = 4;

const TypeIconEnum = {
  bug: <Bug style={{ marginRight: MARGIN_RIGHT }} />,
  dark: <Dark style={{ marginRight: MARGIN_RIGHT }} />,
  dragon: <Dragon style={{ marginRight: MARGIN_RIGHT }} />,
  electric: <Electric style={{ marginRight: MARGIN_RIGHT }} />,
  fairy: <Fairy style={{ marginRight: MARGIN_RIGHT }} />,
  fighting: <Fighting style={{ marginRight: MARGIN_RIGHT }} />,
  fire: <Fire style={{ marginRight: MARGIN_RIGHT }} />,
  flying: <Flying style={{ marginRight: MARGIN_RIGHT }} />,
  ghost: <Ghost style={{ marginRight: MARGIN_RIGHT }} />,
  grass: <Grass style={{ marginRight: MARGIN_RIGHT }} />,
  ground: <Ground style={{ marginRight: MARGIN_RIGHT }} />,
  ice: <Ice style={{ marginRight: MARGIN_RIGHT }} />,
  normal: <Normal style={{ marginRight: MARGIN_RIGHT }} />,
  poison: <Poison style={{ marginRight: MARGIN_RIGHT }} />,
  psychic: <Psychic style={{ marginRight: MARGIN_RIGHT }} />,
};

function TypeIcon({ type }: Props) {
  return TypeIconEnum[type];
}

export function PokemonTypeCard({ type, ...rest }: Props) {
  return (
    <Pressable mr={3} bg={type} {...rest} rounded="sm" p={1}>
      <HStack>
        <TypeIcon type={type} />
        <Text
          textTransform="capitalize"
          color="white"
          fontFamily="body"
          fontSize="12"
          fontWeight="400"
        >
          {type}
        </Text>
      </HStack>
    </Pressable>
  );
}
